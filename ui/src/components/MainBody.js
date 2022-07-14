import React, { useState, useContext, useEffect } from 'react';
import { NavApi } from '../App';
import Income from '../body-divs/Income';
import Expenses from '../body-divs/Expenses';
import Receivables from '../body-divs/Receivables';
import Payables from '../body-divs/Payables';
import Payroll from '../body-divs/Payroll';
import Reports from '../body-divs/Reports';
import Settings from '../body-divs/Settings';
import { getBodyDiv } from '../Helper';

export default function Main(){

  const navApi = useContext(NavApi);
  const [ navItem, setNavItem ] = useState(navApi.navItem);


  useEffect(() => {
    setNavItem(navApi.navItem)
  }, [ navApi.navItem ])

  return (
    <div className="MainBody" data-menu="default">
      {getBodyDiv(navItem)}
    </div>
  )
}
