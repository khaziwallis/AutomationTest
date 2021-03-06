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
          <span className="mb-5">Please Login !!</span>
          <label className="userNameLbl">User Name</label>
          <input
            className=" userName form-control"
            id="userNameId"
            type="text"
            value={this.state.username}
            onChange={this.handleUserChange}
            data-test-hook="userName"
          />

          <label>Password</label>
          <input
            className="password form-control"
            type="password"
            value={this.state.password}
            onChange={this.handlePassChange}
            data-test-hook="password"
          />

          <button
            type="submit"
            value="Log In"
            className="btn btn-primary submitBtn"
            data-test-hook="submitBtn"
          >
            <h3>{"Log In "}</h3>
          </button>
          {this.state.error && (
            <div>
              <h3
                data-test-hook="errorMsg"
                onClick={this.dismissError}
                className="error-msg"
              >
                {this.state.error}
              </h3>
              <button
                data-test-hook="submitBtn"
                className="btn btn-danger btn-sm dismiss-error"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default LoginPage;
