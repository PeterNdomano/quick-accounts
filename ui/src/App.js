import React, { useState, useEffect } from 'react';
import { checkLogin } from './Helper';
import Login from './components/Login';

export default function App() {
  const [ loginStatus, setLoginStatus ] = useState(0);

  useState(() => {
    //re-render
    console.log(loginStatus);
  }, [loginStatus]);

  let getLoginStatus = async () => {
    await checkLogin().then(response => {
      //set login status
      setLoginStatus(response.status);
    }, error => {
      //error occured
    });
  }


  return (
    <>
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
