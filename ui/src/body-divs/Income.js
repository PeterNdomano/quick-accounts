import React, { useState, useContext } from 'react';
import { MainContext } from '../App';
import { MdAdd } from 'react-icons/md';
import NewIncome from '../views/NewIncome';

export default function Component() {

  const mainContext = useContext(MainContext);
  const QA = mainContext.QA;


  return (
    <div className="container">
      <div className="row">

        <div className="col-md-6 col-sm-12">
          <div className="card introCard bg-success">
            <div className="card-body d-flex">
              <h4 className="align-self-center flex-grow-1" style={{ margin:"0" }}>
                <span style={{ fontSize:"70px" }}>10 M</span>
              </h4>
              <h6 className="align-self-center" style={{ margin:"0" }}>
                <span style={{ fontSize:"30px" }}>Tsh</span><br/>
                <span style={{ fontSize:"12px" }}>Today's Income</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="card introCard bg-warning">
            <div className="card-body d-flex">
              <h4 className="align-self-center flex-grow-1" style={{ margin:"0" }}>
                <span style={{ fontSize:"70px" }}>10 M</span>
              </h4>
              <h6 className="align-self-center" style={{ margin:"0" }}>
                <span style={{ fontSize:"30px" }}>Tsh</span><br/>
                <span style={{ fontSize:"12px" }}>Total Income</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">

              Income against time graph


            </div>
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">

              <div style={{ height:"30px" }} className="card-title d-flex justify-content-between">
                <h6 className="align-self-center">Income Records</h6>
                <button
                  onClick={() => {
                    mainContext.setModal('Test', <NewIncome/>)
                  }}
                  className="align-self-center btn btn-dark btn-sm text-light">
                  <MdAdd size={12}/>&nbsp;&nbsp;Add New
                </button>
              </div>
              <hr/>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
