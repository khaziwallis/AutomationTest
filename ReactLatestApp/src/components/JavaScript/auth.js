import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(params, cb) {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    axios({
      method: "post",
      baseURL: "http://localhost:3000/api",
      url: "/login",
      data: params,
      config: axiosConfig
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
