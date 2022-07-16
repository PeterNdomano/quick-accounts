import React from 'react';

export default function Component() {
  return (
    <div className="row OneFormItem">
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
      <div className="col-md-3 col-sm-12">
        <div className="form-group">
          <label>Sub Total</label>
          <input className="form-control"/>
        </div>
      </div>
    </div>
  )
}
