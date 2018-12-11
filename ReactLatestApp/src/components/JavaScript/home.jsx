import React, { Component } from "react";
import auth from "./auth";
import axios from "axios";
import "../css/home.css";
import SearchInput from "react-search-input";
import Popup from "./Popup";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: "",
      show: false
    };
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/user001").then(res => {
      this.setState({ data: res.data });
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  addUser = newData => {
    this.setState(prevState => {
      let newUser = {
        id: prevState.data.length + 1,
        name: newData.name,
        city: newData.city,
        gender: newData.gender,
        favFoods: newData.favFoods
      };
      let prevInfo = prevState.data;
      prevInfo.push(newUser);
      return {
        data: prevInfo
      };
    });
  };

  handleOnDelete = name => {
    const data = this.state.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) data.splice(i, 1);
    }
    this.setState({ data, searchTerm: "" });
  };

  render() {
    const filteredData = this.state.data.filter(item =>
      item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#212529" }}
        >
          <span className="navbar-brand">Welcome</span>
          <button
            className="logout-btn btn btn-info my-2 my-sm-0 "
            data-test-hook="logoutBtn"
            onClick={() => {
              auth.logout(() => {
                this.props.history.push("/");
              });
            }}
          >
            Logout
          </button>
        </nav>
        <div>
          <SearchInput
            className="search-input"
            onChange={this.searchUpdated}
            value={this.state.searchTerm}
            data-test-hook="searchName"
          />
        </div>
        <div className="tab-1">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">
                  <h5>ID</h5>
                </th>
                <th scope="col">
                  <h5>First Name</h5>
                </th>
                <th scope="col">
                  <h5>City</h5>
                </th>
                <th scope="col">
                  <h5>Gender</h5>
                </th>
                <th scope="col">
                  <h5>Favourite Cuisines</h5>
                </th>
                <th scope="col">
                  <h5>Actions</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((info, index) => (
                <tr key={index}>
                  <th scope="row">{info.id}</th>
                  <td>{info.name}</td>
                  <td>{info.city}</td>
                  <td>{info.gender}</td>
                  <td>{info.favFoods + ""}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => this.handleOnDelete(info.name)}
                      data-test-hook="deleteUser"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Popup addNewUser={this.addUser} dataTest="addUser" />
      </div>
    );
  }
}

export default Home;
