import React, { useState, useEffect } from 'react';
import OneFormItem from '../ones/OneFormItem';
import { MdAdd } from 'react-icons/md';

export default function Component(props) {
  const [ rows, setRows ] = useState("peter");
  const [ name, setName ] = useState("First name");

  const addRow = () => {
    setRows('Ndomano')
  }

  useEffect(() => {
    console.log('rows changed');
  }, [rows]);

  return (
    <div className="ItemsForm" id="itemsForm">
      <div id="tableRows" style={{ width:"100%", margin:"0px", padding:"0px" }}>
        {name}
      </div>
      <div className="text-right">
        <button onClick={() => { setName('Second name') }} className="btn btn-sm btn-dark">
          <MdAdd size={12}/>&nbsp;&nbsp;Add Row
        </button>
      </div>
    </div>
  )
}
