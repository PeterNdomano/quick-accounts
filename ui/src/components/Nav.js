import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';


export default function Main(){
  let toggleMenu = () => {
    let ind = document.getElementsByClassName('topBar')[0].dataset['menu'];
    if(ind === 'default' || ind === '') {

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
