import React, { useState, useEffect, createContext } from 'react';
import { checkLogin, tellUser } from './Helper';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import MainBody from './components/MainBody';
import MainLoader from './components/MainLoader';
import Modal from './components/Modal';
import ConfrimDialog from './components/ConfirmDialog';
import QuickAccounts from './models/QuickAccounts';

export const MainContext = createContext(null);
export default function App() {
  const [ loginStatus, setLoginStatus ] = useState(0);
  const [ ready, setReady ] = useState(false);
  const [ navItem, setNavItem ] = useState("navIncome");
  const [ showModal, setShowModal ] = useState(false);
  const [ modalView, setModalView ] = useState(<></>);
  const [ modalTitle, setModalTitle ] = useState("");
  const [ dialogMsg, setDialogMsg ] = useState("");
  const [ showDialog, setShowDialog ] = useState(false);

  const QA = new QuickAccounts({
    mode: "online"
  });

  let setModal = (title, view) => {
    setModalView(view);
    setModalTitle(title);
    setShowModal(true);
  }

  let setDialog = ( msg ) => {
    setDialogMsg(msg);
    setShowDialog(true);
  }

  const mainContext = {
    navItem,
    setNavItem,
    QA,
    showModal,
    setShowModal,
    setModal,
    setDialog,
    setShowDialog,
  };


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

  useEffect(() => {

  }, [ showModal ]);

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
              <ConfirmDialog msg={dialogMsg}/>
              <Modal title={modalTitle} view={modalView}/>
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
