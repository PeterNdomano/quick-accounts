import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';

export default function Main(){
  return (
    <div className="Nav">
      <div className="topBar d-flex">
        <MdMenu className="menuIcon align-self-center"/>
        <h3 className="topTitle align-self-center">Quick Accounts</h3>
      </div>
      <div className="navMenu">
      </div>
    </div>
  )
}
