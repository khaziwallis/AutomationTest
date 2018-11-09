import React, { Component } from "react";
import auth from "./auth";
import "../css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#212529" }}
        >
          <span class="navbar-brand">Welcome Khazi</span>
          <button
            className="logout-btn btn btn-info my-2 my-sm-0 "
            onClick={() => {
              auth.logout(() => {
                this.props.history.push("/");
              });
            }}
          >
            Logout
          </button>
        </nav>
        <div class=" mt-5 add-data ">
          <input
            type="text"
            class="form-control"
            value="khazi"
            className="inp-1 "
          />

          <div class="mt-3 drop-inp">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected value="1">
                Bengaluru
              </option>
              <option value="2">Mumbai</option>
              <option value="3">Delhi</option>
            </select>
          </div>

          <button type="button" class="btn btn-outline-info mt-3 mb-5">
            Add
          </button>
        </div>

        <div className="tab-1">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
