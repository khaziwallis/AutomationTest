import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      city: "",
      gender: "",
      favFoods: []
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }

  handleOptionChange = changeEvent => {
    this.setState({
      gender: changeEvent.target.value
    });
  };

  handleCheckbox = e => {
    let checkedArray = this.state.favFoods;
    let selectedValue = e.target.value;

    if (e.target.checked === true) {
      checkedArray.push(selectedValue);
      this.setState({
        favFoods: checkedArray
      });
    } else {
      let valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);

      this.setState({
        favFoods: checkedArray
      });
    }
  };

  handleAdd() {
    const newUser = {
      name: this.state.name,
      city: this.state.city,
      gender: this.state.gender,
      favFoods: this.state.favFoods
    };
    this.props.addNewUser(newUser);
    this.setState({
      show: false,
      name: "",
      city: "",
      gender: "",
      favFoods: []
    });
  }

  render() {
    const favFoods = [
      "Indian",
      "Continental",
      "Chinese",
      "Italian",
      "European"
    ];
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.handleShow}
          className="add-btn"
          data-test-hook={this.props.dataTest}
        >
          {"Add User"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              Enter your details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={this.handleNameChange}
                  data-test-hook="newName"
                />
              </div>
              <div className="mt-2">
                <select
                  className="custom-select"
                  onChange={this.handleCityChange}
                  id="inputGroupSelect01"
                  data-test-hook="newCity"
                >
                  <option value="1">-- Your City --</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              <div className="radio-btn">
                <div className="radio m-2" data-test-hook="newGender">
                  <label>
                    <input
                      type="radio"
                      value="Male"
                      className="mr-2"
                      checked={this.state.gender === "Male"}
                      onChange={this.handleOptionChange}
                      name="gender"
                    />
                    Male
                  </label>
                </div>
                <div className="radio m-2">
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      className="mr-2"
                      checked={this.state.gender === "Female"}
                      onChange={this.handleOptionChange}
                      name="gender"
                    />
                    Female
                  </label>
                </div>
              </div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "15px",
                  textDecoration: "underline"
                }}
              >
                <label> {"Favourite Cuisines"} </label>
              </span>
              <div className="check-box">
                {favFoods.map((fav, index) => (
                  <div key={index}>
                    <input
                      className="ml-2 mr-2"
                      type="checkbox"
                      value={fav}
                      onChange={this.handleCheckbox}
                    />
                    {fav}
                  </div>
                ))}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={this.handleAdd}
              className="btn btn-info w-50"
              disabled={!this.state.name}
            >
              Add
            </Button>
            <Button onClick={this.handleClose} className="btn btn-danger w-25">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Popup;
