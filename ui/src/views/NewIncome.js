import React, { useState } from 'react';
import ItemsForm from './ItemsForm';

export default function Component(props) {
  let itemsFormReporter = (report) => {
    console.log(report);
  }
  return (
    <div className="container">
      <form style={{ width: "100%" }}>
        <div className="row">

          <div className="col-md-12 col-sm-12">
            <h4>Basic Information</h4>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" type="text"/>
            </div>
            <div className="form-group">
              <label>Description (Optional)</label>
              <textarea className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input className="form-control" type="date"/>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Total Amount To be Received</label>
              <input className="form-control" type="number"/>
            </div>
            <div className="form-group">
              <label>Amount Currently Received</label>
              <input className="form-control" type="number"/>
            </div>
            <div className="form-group">
              <h6>
                An account will be created to track payments if amount received is less
                than total amount to be received
              </h6>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <h4>Particulars</h4>
            <h6>*Only use this part if you want to specify items for invoice creation otherwise it can be ignored</h6>
          </div>
          <div className="col-md-12 col-sm-12">
            <ItemsForm/>
          </div>
        </div>
      </form>
    </div>
  );
}
