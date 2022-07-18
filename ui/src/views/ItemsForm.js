import React, { useState, useEffect, useContext } from 'react';
import OneFormItem from '../ones/OneFormItem';
import { MdAdd } from 'react-icons/md';
import { MainContext } from '../App';


export default function Component(props) {
  const [ rows, setRows ] = useState([<OneFormItem key={0}/>]);
  const mainContext = useContext(MainContext);

  const addRow = () => {
    setRows([ ...rows, <OneFormItem key={rows.length} /> ])
  }

  return (
    <div className="ItemsForm" id="itemsForm">
      <div id="tableRows" style={{ width:"100%", margin:"0px", padding:"0px" }}>
        {rows}
      </div>
      <div className="text-right">
        <button onClick={addRow} className="btn btn-sm btn-dark">
          <MdAdd size={12}/>&nbsp;&nbsp;Add Row
        </button>
      </div>
    </div>
  )
}
