import React, { useState, useEffect } from 'react';
import { checkLogin } from './Helper';
import Login from './components/Login';

function App() {
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
    <div className="App">
      {
        (loginStatus === 1) ?
        <>
          <h1>Logged In</h1>
          <h1>Logged In</h1>
        </>
        :
        <>
          <Login/>
        </>
      }
    </div>
  );
}

export default App;
