import React, { useState, useContext } from 'react';
import { NavApi } from '../App';

export default function Main(){

  const navApi = useContext(NavApi);

  return (
    <div className="MainBody" data-menu="default">
      <div className="container bg-danger" style={{ height:"300px" }}>
        {navApi.navItem}
      </div>
    </div>
  )
}
