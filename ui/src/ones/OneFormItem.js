import React,{ useState, useEffect, useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { tellUser } from '../Helper';
import { NewIncomeContext } from '../view/NewIncome';

export default function Component() {

  const [ deleted, setDeleted ] = useState(false);
  const [ particular, setParticular ] = useState("");
  const [ unit, setUnit ] = useState("");
  const [ quantity, setQuantity ] = useState(0);
  const [ unitPrice, setUnitPrice ] = useState(0);
  const [ subTotal, setSubTotal ] = useState(0);
  const newIncomeContext = useContext(NewIncomeContext);

  let handleParticular = (value) => {
    if(value.trim().length >= 0) {
      setParticular(value);
    }
    else {
      tellUser('Invalid particular');
    }
  }

  let handleUnit = (value) => {
    if(value.trim().length >= 0) {
      setUnit(value);
    }
    else {
      tellUser('Invalid unit. Unit should be set, kilogram, pieces, etc...');
    }
  }

  let handleQuantity = (value) => {
    if(!isNaN(value) && Number(value) >= 0) {
      setQuantity(value);
    }
    else {
      tellUser('Invalid quantity');
    }
  }

  let handleUnitPrice = (value) => {
    if(!isNaN(value) && Number(value) >= 0) {
      setUnitPrice(value);
    }
    else {
      tellUser('Invalid unit price');
    }
  }

  let handleSubTotal = (value) => {
    if(!isNaN(value) && Number(value) >= 0) {
      setSubTotal(value);
    }
    else {
      tellUser('Invalid sub total');
    }
  }

  useEffect(() => {
    setSubTotal( Number(quantity) * Number(unitPrice) );
  }, [ quantity, unitPrice ])

  useEffect(() => {
    newIncomeContext.setAmountTobeReceived(
      //Number(newIncomeContext.amountTobeReceived) + Number(subTotal)
    )
  }, [ subTotal ])

  return (
    <>
    {
      (!deleted)
      ?
      <div className="OneFormItem card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>Particular</label>
                <input value={particular} onChange={(e) => handleParticular(e.target.value)} className="form-control" type="text" />
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Unit</label>
                <input value={unit} onChange={(e) => handleUnit(e.target.value)} className="form-control" type="text"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Quantity</label>
                <input value={quantity} onChange={(e) => handleQuantity(e.target.value)} className="form-control"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Unit Price</label>
                <input value={unitPrice} onChange={(e) => handleUnitPrice(e.target.value)} className="form-control"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Sub Total</label>
                <input readOnly={true} value={subTotal} onChange={(e) => handleSubTotal(e.target.value)} className="form-control"/>
              </div>
            </div>
            <div className="col-md-1 col-sm-12">
              <div className="form-group">
                <MdDelete onClick={() => { setDeleted(true) }} style={{ cursor:"pointer", color:"var(--danger)", marginTop:"40px" }} size={20}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <></>

    }
    </>

  )
}
