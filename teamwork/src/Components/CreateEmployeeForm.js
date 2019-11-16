// eslint-disable-next-line
import React, { Component } from "react";

class CreateEmployee extends Component () {
         
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      jobrole: "",
      department: "select",
      address: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const { name, value, type, checked } = event.target;
    type === checked
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  
//   async postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrer: 'no-referrer', // no-referrer, *client
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return await response.json(); // parses JSON response into native JavaScript objects
//   }
  
  handleSubmit = async () => {

    const url = 'http://localhost:3500/api/v1/auth/create-user';
    const data = this.state;

    try {
        const response = await fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
      } catch (error) {
        console.error('Error:', error);
      }

    // try {
    //     const data = await this.postData('localhost:3500/api/v1/auth/create-user', this.state);
    //     console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    //   } catch (error) {
    //     console.error(error);
    //   }
  }

  render() {
    return (
        <div>
          <p>Create Teamwork Employee Account:</p>
          <form onSubmit={this.handleSubmit}>
              <label>First Name: </label><label>Last Name:</label><br />
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            <br />
            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <br />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <br />
            <label>Gender</label>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>Job Role</label>
            <input
              type="text"
              name="jobrole"
              placeholder="Job Role"
              onChange={this.handleChange}
            />
            <br />
            <label>
              Department: 
              <select
                name="department"
                value={this.state.department}
                onChange={this.handleChange}
              >
                  <option value="Logistics">Logistics</option>
                  <option value="Service Delivery">Service Delivery</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Design Group">Design Group</option>
              </select>
            </label>
            <br />
            <textarea 
            name="address"
            value={this.state.address}
            placeholder="Enter address"
            onChange={this.handleChange}
            rows="10"
            cols="49"
            />
            <h1>
              {this.state.firstName} {this.state.lastName} {this.state.jobrole}
            </h1>
            <button>Submit</button>
          </form>
        </div>
      );
  }
    
}

export default CreateEmployee;
