import React, { useState, useEffect, createContext } from 'react';
import { checkLogin, tellUser } from './Helper';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import MainBody from './components/MainBody';
import MainLoader from './components/MainLoader';
import QuickAccounts from './models/QuickAccounts';

export const MainContext = createContext(null);
export default function App() {
  const [ loginStatus, setLoginStatus ] = useState(0);
  const [ ready, setReady ] = useState(false);
  const [ navItem, setNavItem ] = useState("navIncome");
  const QA = new QuickAccounts({
    mode: "online"
  });


  const mainContext = { navItem, setNavItem, QA }

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
          <MainContext.Provider value={mainContext}>
            <div className="App">
              <Nav/>
              <MainBody/>
            </div>
          </MainContext.Provider>
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
