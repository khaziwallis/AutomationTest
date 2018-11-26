import React, { Component } from "react";
import "../css/login.css";
import auth from "./auth";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      token: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token) this.props.history.push("/home");
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    } else {
      const user = {
        userName: this.state.name,
        password: this.state.password
      };
      var success = () => {
        this.props.history.push("/home");
      };

      auth.login(user, success);
      return this.setState({ error: "" });
    }
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
      name: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} className="form-layout">
          <label>User Name</label>
          <input
            className=" input-1 form-control"
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />

          <label>Password</label>
          <input
            className="input-2 form-control"
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />

          <button
            type="submit"
            value="Log In"
            data-test="submit"
            className="btn btn-primary submit"
          >
            <h3>{"Log In "}</h3>
          </button>
          {this.state.error && (
            <h3 data-test="error" className="error-msg">
              <button
                className="btn btn-danger btn-sm dismiss-error"
                onClick={this.dismissError}
              >
                ✖
              </button>
              {this.state.error}
            </h3>
          )}
        </form>
      </div>
    );
  }
}

export default LoginPage;
