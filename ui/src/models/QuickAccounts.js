export default class QuickAccounts {
  constructor(options) {
    let {
      mode //offline or online
    } = options;
    this.mode = mode;
  }

  test = () => {
    console.log('just a test');
  }

}
