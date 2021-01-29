class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login(cb, params) {
    await cb(params);
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
