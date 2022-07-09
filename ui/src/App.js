import React, { useState, useEffect } from 'react';
import { checkLogin, tellUser } from './Helper';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [ loginStatus, setLoginStatus ] = useState(0);

  let getLoginStatus = async () => {
    await checkLogin().then(response => {
      //set login status
      setLoginStatus(response.status);
    }, error => {
      //error occured
      telluser(error);
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

        </div>
        :
        <>
          <Login/>
        </>
      }
    </>

  );
}
