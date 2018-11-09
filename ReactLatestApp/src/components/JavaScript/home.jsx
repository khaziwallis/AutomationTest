import React, { Component } from "react";
import auth from "./auth";
import "../css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          className=" logout-btn btn btn-danger"
          onClick={() => {
            auth.logout(() => {
              this.props.history.push("/");
            });
          }}
        >
          Logout
        </button>
        <h1>Welcome!!</h1>
      </div>
    );
  }
}

export default Home;
