import React, { useState, useContext, useEffect } from 'react';
import {
  MdMenu,
  MdOutlineMoney,
  MdOutlineMoneyOff,
  MdOutlinePeople,
  MdOutlineAnalytics,
} from 'react-icons/md';

import { GiReceiveMoney } from 'react-icons/gi';
import  { AiOutlineCopy } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { NavApi } from '../App';
import { isMobile  } from '../Helper';


export default function Main(){

  const navApi = useContext(NavApi);

  let openMenu = () => {
    document.getElementsByClassName('topBar')[0].dataset['menu'] = 'opened';
    document.getElementsByClassName('navMenu')[0].dataset['menu'] = 'opened';
    document.getElementsByClassName('MainBody')[0].dataset['menu'] = 'opened';
    document.getElementsByClassName('navCover')[0].dataset['menu'] = 'opened';
  }

  let closeMenu = () => {
    document.getElementsByClassName('topBar')[0].dataset['menu'] = 'closed';
    document.getElementsByClassName('navMenu')[0].dataset['menu'] = 'closed';
    document.getElementsByClassName('MainBody')[0].dataset['menu'] = 'closed';
    document.getElementsByClassName('navCover')[0].dataset['menu'] = 'closed';
  }

  let toggleMenu = () => {
    let ind = document.getElementsByClassName('topBar')[0].dataset['menu'];
    if(ind === 'closed') {
      openMenu();
    }
    else if (ind === 'default') {
      //open on mobile, close on deskto
      if(isMobile()) {
        openMenu();
      }
      else {
        closeMenu();
      }
    }
    else {
      closeMenu();
    }
  }

  let menuItemsReset = () => {
    document.getElementById('navIncome').dataset['selected'] = "false";
    document.getElementById('navExpenses').dataset['selected'] = "false";
    document.getElementById('navReceivables').dataset['selected'] = "false";
    document.getElementById('navPayables').dataset['selected'] = "false";
    document.getElementById('navPayroll').dataset['selected'] = "false";
    document.getElementById('navReports').dataset['selected'] = "false";
    document.getElementById('navSettings').dataset['selected'] = "false";
  }

  let navSelected = (item) => {
    menuItemsReset();
    document.getElementById(item).dataset['selected'] = "true";
    navApi.setNavItem(item);
  }

  useEffect(() => {
    navSelected(navApi.navItem);
  }, [])
  return (
    <div className="Nav">
      <div className="navCover" onClick={closeMenu} data-menu="default"></div>
      <div className="topBar d-flex" data-menu="default">
        <MdMenu onClick={toggleMenu} className="menuIcon align-self-center"/>
        <h3 className="topTitle align-self-center">Quick Accounts</h3>
      </div>
      <div className="navMenu" data-menu="default">
        <div className="navMenuIntro"></div>
        <div style={{ padding: "10px", width:"100%" }}>
          <div onClick={() => { navSelected('navIncome') }} className="navMenuItem d-flex" id="navIncome">
            <MdOutlineMoney className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Income</h3>
          </div>

          <div onClick={() => { navSelected('navExpenses') }} className="navMenuItem d-flex" id="navExpenses">
            <MdOutlineMoneyOff className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Expenses</h3>
          </div>

          <div onClick={() => { navSelected('navReceivables') }} className="navMenuItem d-flex" id="navReceivables">
            <GiReceiveMoney className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Receivables</h3>
          </div>

          <div onClick={() => { navSelected('navPayables') }} className="navMenuItem d-flex" id="navPayables">
            <AiOutlineCopy className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Payables</h3>
          </div>

          <div onClick={() => { navSelected('navPayroll') }} className="navMenuItem d-flex" id="navPayroll">
            <MdOutlinePeople className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Payroll</h3>
          </div>

          <div onClick={() => { navSelected('navReports') }} className="navMenuItem d-flex" id="navReports">
            <MdOutlineAnalytics className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Reports & Analysis</h3>
          </div>

          <div onClick={() => { navSelected('navSettings') }} className="navMenuItem d-flex" id="navSettings">
            <FiSettings className="mIcon align-self-center"/>
            <h3 className="mTitle align-self-center">Settings</h3>
          </div>

        </div>
      </div>
    </div>
  )
}
