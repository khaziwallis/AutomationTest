import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(params, cb) {
    axios({
      method: "post",
      url: "http://localhost:5000/api/post",
      params: params,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(res => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        this.authenticated = true;
        cb(res);
      } else {
        alert("enter valid Username or password");
      }
    });
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
