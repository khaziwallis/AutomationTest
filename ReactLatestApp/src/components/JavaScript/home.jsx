import React, { Component } from "react";
import auth from "./auth";
import "../css/home.css";
import InlineEdit from "react-ions/lib/components/InlineEdit";

class Home extends Component {
  handleSave = event => {
    if (event.target.name === "test") {
      this.setState({ inlineValue: event.target.value });
    }
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#212529" }}
        >
          <span className="navbar-brand">Welcome Khazi</span>
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
        <div className=" mt-5 add-data ">
          <input type="text" className=" inp-1" />

          <div className="mt-3 drop-inp">
            <select className="custom-select" id="inputGroupSelect01">
              <option defaultValue value="1">
                Bengaluru
              </option>
              <option value="2">Mumbai</option>
              <option value="3">Delhi</option>
            </select>
          </div>

          <button type="button" className="btn btn-outline-info mt-3 mb-5">
            Add
          </button>
        </div>

        <div className="tab-1">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <InlineEdit
                    value={"Khazi"}
                    changeCallback={this.handleSave}
                  />
                </td>
                <td>
                  <InlineEdit value={"Bengaluru"} />
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <InlineEdit value={"Vinay"} />
                </td>
                <td>
                  <InlineEdit value={"Bengaluru"} />
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <InlineEdit value={"Shanth"} />
                </td>
                <td>
                  <InlineEdit value={"Bengaluru"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
