import React, { useState, createContext, useContext, useEffect } from 'react';
import ItemsForm from './ItemsForm';
import { tellUser } from '../Helper';

export const NewIncomeContext = createContext(null);

export default function Component(props) {


  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ date, setDate ] = useState(new Date().toISOString().substr(0, 10));
  const [ amountTobeReceived, setAmountTobeReceived ] = useState(0);
  const [ amountReceived, setAmountReceived ] = useState(0);
  const [ triggerEncode, setTriggerEncode ] = useState(false);
  const [ isDebt, setIsDebt ] = useState(false);
  const [ tableItems, setTableItems ] = useState([]);


  let handleAmountTobeReceived = (value) => {
    if(!isNaN(value) && Number(value) >= 0) {
      setAmountTobeReceived(value);
    }
    else {
      tellUser('Invalid amount');
    }
  }

  let handleAmountReceived = (value) => {
    if(!isNaN(value) && Number(value) >= 0) {
      setAmountReceived(value);
    }
    else {
      tellUser('Invalid amount');
    }
  }

  const encodeTableItems = () => {
    let tableItems = document.getElementsByClassName('incomeTableItem');
    for(let i = 0; i < tableItems.length; i++) {
      let item = {
        particular: tableItems.children[0].children[0].children[0].children[0].children[1].value,
        unit: tableItems.children[0].children[0].children[0].children[0].children[1].value,
        quantity: tableItems.children[0].children[0].children[0].children[0].children[1].value,
        unitPrice: tableItems.children[0].children[0].children[0].children[0].children[1].value,
        subTotal: tableItems.children[0].children[0].children[0].children[0].children[1].value,
      }
    }

  }

  useEffect(() => {
    if(Number(amountTobeReceived) > Number(amountReceived)) {
      setIsDebt(true);
    }
    else {
      setIsDebt(false);
    }
  }, [ amountTobeReceived, amountReceived ])

  useEffect(() => {
    encodeTableItems();
  }, [ triggerEncode ]);



  const newIncomeContext = {
    setAmountTobeReceived,
    setAmountReceived,
    amountTobeReceived,
    amountReceived,
    triggerEncode,
    setTriggerEncode,
  }
  return (
    <NewIncomeContext.Provider value={newIncomeContext}>
      <div className="container">

        <div className="row">

          <div className="col-md-12 col-sm-12">
            <h4>Basic Information</h4>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" type="text"/>
            </div>
            <div className="form-group">
              <label>Description & Info (Optional)</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input value={date} onChange={(e) => setDate(e.target.value)} className="form-control" type="date"/>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Total Amount To be Received</label>
              <input value={amountTobeReceived} onChange={(e) => handleAmountTobeReceived(e.target.value) } className="form-control"/>
            </div>
            <div className="form-group">
              <label>Amount Currently Received</label>
              <input value={amountReceived} onChange={(e) => handleAmountReceived(e.target.value) } className="form-control"/>
            </div>
            {
              (isDebt) ?
              <div className="form-group">
                <h5 className="text-danger">
                  <b>*An account will be created to track more transactions for this Payment</b>
                </h5>
              </div> :
              <></>
            }
          </div>

          <div className="col-md-12 col-sm-12">
            <h4>Particulars</h4>
            <h6>*Only use this part if you want to specify items for invoice creation otherwise it can be ignored</h6>
          </div>
          <div className="col-md-12 col-sm-12">
            <ItemsForm />
          </div>
        </div>
      </div>
    </NewIncomeContext.Provider>

  );
}
