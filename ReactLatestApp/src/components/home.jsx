import React, { Component } from "react";
import auth from "./auth";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome!!</h1>
        <button
          onClick={() => {
            auth.logout(() => {
              this.props.history.push("/");
              localStorage.removeItem("token");
            });
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Home;
