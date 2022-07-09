import React, { useState } from 'react';
import $ from 'jquery';
import { tellUser, MAIN_URL, getInlineLoader } from '../Helper';

export default function Main() {

  let [loading, setLoading] = useState(false);

  let login = (e) => {
    e.preventDefault();
    if(!loading) {
      let username = $('#username').val();
      let password = $('#password').val();
      if(username.trim().length > 0) {
        if(password.trim().length > 0) {
          setLoading(true);
          $.post(MAIN_URL+'login.php', { username, password }, (data, status) => {
            setLoading(false);
            //console.log(data);
            if(status === 'success') {
              let response = JSON.parse(data);
              if(response.status === 1) {
                window.location.reload();
              }
              else {
                tellUser(response.msg);
              }
            }
            else {
              tellUser('Network error');
            }
          });
        }
        else {
          tellUser('Invalid password');
        }
      }
      else {
        tellUser('Invalid username');
      }
    }
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
                <button className="btn btn-dark">
                {
                  (loading) ?
                  getInlineLoader() :
                  'Login'
                }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
