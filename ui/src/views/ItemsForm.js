import React, { useState, useEffect, useContext } from 'react';
import OneFormItem from '../ones/OneFormItem';
import { MdAdd } from 'react-icons/md';
import { MainContext } from '../App';
import { NewIncomeContext } from '../views/NewIncome';


export default function Component(props) {
  const [ rows, setRows ] = useState([]);
  const mainContext = useContext(MainContext);
  const newIncomeContext = useContext(NewIncomeContext);

  const addRow = () => {
    setRows([ ...rows, <OneFormItem itemId={rows.length} key={rows.length} /> ])
  }

  const createTable = () => {
    newIncomeContext.setTableItems([{
      particular:"",
      unit:"",
      quantity:0,
      unitPrice:0,
      subTotal:0,
    }]);
    setRows([ <OneFormItem itemId={rows.length} key={rows.length} /> ])
  }

  return (
    <div className="ItemsForm" id="itemsForm">
      <h4>Particulars</h4>
      <h6>*Only use this part if you want to specify multiple items for this income record</h6>
      <div id="tableRows" style={{ width:"100%", margin:"0px", padding:"0px" }}>
        {
          (newIncomeContext.tableItems.length === 0) ?
          <div className="text-left">
            <button onClick={createTable} className="btn btn-dark">
              Use Items Table
            </button>
          </div> :
          <>
            {rows}
            <div className="text-right">
              <button onClick={addRow} className="btn btn-sm btn-dark">
                <MdAdd size={12}/>&nbsp;&nbsp;Add Row
              </button>
            </div>
          </>
        }

      </div>

    </div>
  )
}
