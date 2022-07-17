import React,{ useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

export default function Component() {

  const [ deleted, setDeleted ] = useState(false);
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
                <input className="form-control"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Unit</label>
                <input className="form-control"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Quantity</label>
                <input className="form-control"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Unit Price</label>
                <input className="form-control"/>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>Sub Total</label>
                <input className="form-control"/>
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
