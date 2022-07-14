import React, { useState, useEffect, createContext } from 'react';
import { checkLogin, tellUser } from './Helper';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import MainBody from './components/MainBody';
import MainLoader from './components/MainLoader';

export const NavApi = createContext(null);
export default function App() {
  const [ loginStatus, setLoginStatus ] = useState(0);
  const [ ready, setReady ] = useState(false);
  const [ navItem, setNavItem ] = useState("navIncome");


  const navApi = { navItem, setNavItem }

  let getLoginStatus = async () => {
    await checkLogin().then(response => {
      //set login status
      setLoginStatus(response.status);
      setReady(true);
    }, error => {
      //error occured
      tellUser(error);
    });
  }

  useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <>
      {
        (ready) ?
        <>
        <ToastContainer
                theme="dark"
              />
        {
          (loginStatus === 1) ?
          <NavApi.Provider value={navApi}>
            <div className="App">
              <Nav/>
              <MainBody/>
            </div>
          </NavApi.Provider>
          :
          <>
            <Login/>
          </>
        }
        </>
        :
        <MainLoader/>
      }
    </>

  );
}
