import React, { useState } from 'react';
import $ from 'jquery';
import { tellUser } from '../Helper';

export default function Main() {

  let login = (e) => {
    e.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();

  }

  return (
    <div className="Login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-12 bg-dark loginCol">
          </div>
          <div className="col-md-4 col-sm-12 bg-light loginCol">
            <form onSubmit={(e) => login(e)}>
              <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text" id="username"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" id="password"/>
              </div>
              <div className="form-group text-right">
                <button className="btn btn-dark">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
