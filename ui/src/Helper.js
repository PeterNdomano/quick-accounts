import $ from 'jquery';

export const MAIN_URL = 'github_projects/quick-accounts/api/';
export function checkLogin(){
  return new Promise((resolved, rejected) => {
    $.post(MAIN_URL+'check_login.php', {}, (data, status) => {
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

export async function checkUserRole(){

}
