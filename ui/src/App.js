import React, { useState, useEffect } from 'react';
import { checkLogin, tellUser } from './Helper';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import MainBody from './components/MainBody';

export default function App() {
  const [ loginStatus, setLoginStatus ] = useState(0);

  let getLoginStatus = async () => {
    await checkLogin().then(response => {
      //set login status
      setLoginStatus(response.status);
    }, error => {
      //error occured
      tellUser(error);
    });
  }

  useState(async () => {
    //re-render
    await getLoginStatus();
  }, []);

  return (
    <>
      <ToastContainer
              theme="dark"
            />
      {
        (loginStatus === 1) ?
        <div className="App">
          <Nav/>
          <MainBody/>
        </div>
        :
        <>
          <Login/>
        </>
      }
    </>

  );
}
