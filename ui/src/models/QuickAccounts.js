import $ from 'jquery';

export default class QuickAccounts {
  constructor(options) {
    let {
      mode //offline or online
    } = options;
    this.mode = mode;

    //misc options. to be set later
    this.currency = 'Tsh';
    this.host = 'github_projects/quick-accounts/api/';
  }

  callApi = (url, params) => {
    //params = JSON.stringify(params);
    return new Promise(async (resolved) => {
      await $.post(this.host+url, params, ( data, status ) => {
        if(status === 'success') {
          let response = JSON.parse(data);
          resolved(response.status, response.msg);
        }
        else {
          resolved(0, "Network connection error, please check connection and retry");
        }
      })
    });
  }

  saveIncome = (inputData) => {
    return new Promise( async (resolved) => {
      if(this.mode === 'online') {
        await this.callApi('save_income.php', inputData).then((status, msg) => {
          resolved(status, msg);
        });
      }
      else {
        //offline mode
      }
    })
  }

}
