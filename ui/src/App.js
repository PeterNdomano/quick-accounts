import React, { useState, useEffect, createContext } from 'react';
import { checkLogin, tellUser } from './Helper';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import MainBody from './components/MainBody';
import MainLoader from './components/MainLoader';
import Modal from './components/Modal';
import ConfirmDialog from './components/ConfirmDialog';
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
  const [ dialogOnConfirm, setDialogOnConfirm ] = useState(null);
  const [ showDialog, setShowDialog ] = useState(false);

  const QA = new QuickAccounts({
    mode: "online"
  });

  const setModal = (title, view) => {
    setModalView(view);
    setModalTitle(title);
    setShowModal(true);
  }

  const setDialog = ( msg, onConfirm ) => {
    setDialogMsg(msg);
    setShowDialog(true);
    setDialogOnConfirm(() => onConfirm);
  }

  const clearModal = () => {
    //this clears modal content
    setModalView(<></>);
    setModalTitle("");
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
    dialogOnConfirm,
    showDialog,
    clearModal,
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

  useEffect(() => {

  }, [ showDialog ]);

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
              <Modal title={modalTitle} view={modalView}/>
              <ConfirmDialog msg={dialogMsg} onConfirm={dialogOnConfirm}/>
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
