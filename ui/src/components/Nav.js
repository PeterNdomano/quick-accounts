import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';


export default function Main(){

  let openMenu = () => {
    document.getElementsByClassName('topBar')[0].dataset['menu'] = 'opened';
    document.getElementsByClassName('navMenu')[0].dataset['menu'] = 'opened';
    document.getElementsByClassName('MainBody')[0].dataset['menu'] = 'opened';
  }

  let closeMenu = () => {
    document.getElementsByClassName('topBar')[0].dataset['menu'] = 'closed';
    document.getElementsByClassName('navMenu')[0].dataset['menu'] = 'closed';
    document.getElementsByClassName('MainBody')[0].dataset['menu'] = 'closed';
  }
  let toggleMenu = () => {
    let ind = document.getElementsByClassName('topBar')[0].dataset['menu'];
    if(ind === 'closed') {
      openMenu();
    }
    else if (ind === 'default') {
      //open on mobile, close on desktop
      openMenu(); //temporary
    }
    else {
      closeMenu();
    }
  }
  return (
    <div className="Nav">
      <div className="topBar d-flex" data-menu="default">
        <MdMenu onClick={toggleMenu} className="menuIcon align-self-center"/>
        <h3 className="topTitle align-self-center">Quick Accounts</h3>
      </div>
      <div className="navMenu" data-menu="default">
      </div>
    </div>
  )
}
