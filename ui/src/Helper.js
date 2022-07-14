import $ from 'jquery';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import Income from './body-divs/Income';
import Expenses from './body-divs/Expenses';
import Receivables from './body-divs/Receivables';
import Payables from './body-divs/Payables';
import Payroll from './body-divs/Payroll';
import Reports from './body-divs/Reports';
import Settings from './body-divs/Settings';

export const MAIN_URL = 'github_projects/quick-accounts/api/';
export function checkLogin(){
  return new Promise((resolved, rejected) => {
    $.post(MAIN_URL+'check_login.php', {}, (data, status) => {
      //console.log(data);
      if(status === 'success') {
        let response = JSON.parse(data);
        //this is exception, here 0 means not logged in and 1 means logged in
        resolved(response);
      }
      else {
        rejected("Network error");
      }
    });
  });
}

export async function checkUserRole() {
  return new Promise((resolved, rejected) => {
    $.post(MAIN_URL+'check_role.php', {}, (data, status) => {
      //console.log(data);
      if(status === 'success') {
        let response = JSON.parse(data);
        resolved(response);
      }
      else {
        rejected("Network error");
      }
    });
  });
}

export function getInlineLoader() {
  return (
    <TailSpin
      color="var(--light)"
      width="30px"
      height="30px"
    />
  );
}

export function tellUser(msg, id = "warning"){
  if(id === "success"){
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  else if(id === "warning"){
    toast.warn(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  else{
    toast(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

}

export function isMobile() {
  let screenWidth = window.innerWidth;
  if(screenWidth <= 768) {
    return true;
  }
  else {
    return false;
  }
}

export function getBodyDiv(navItem) {
  switch (navItem) {
    case "navIncome":
      return <Income/>;
    case "navExpenses":
      return <Expenses/>;
    case "navPayables":
      return <Payables/>;
    case "navReceivables":
      return <Receivables/>;
    case "navPayroll":
      return <Payroll/>;
    case "navReports":
      return <Reports/>;
    case "navSettings":
      return <Settings/>;
    default:
      return <Income/>;

  }
}
