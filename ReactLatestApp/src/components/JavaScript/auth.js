class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    localStorage.setItem("token", "12345");
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    localStorage.removeItem("token");
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
