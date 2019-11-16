// eslint-disable-next-line
import React, { useState } from "react";

export default function CreateEmployee() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    jobRole: "",
    department: "select",
    address: ""
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === checked
      ? setFormState({ ...formState, [name]: checked })
      : setFormState({ ...formState, [name]: value });
  };

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

  const handleSubmit = async event => {
    event.preventDefault();
    const url = "http://localhost:3500/api/v1/auth/create-user";

    try {
      const response = await fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(
          formState
        ), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
          //   'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }

    // try {
    //     const data = await postData('localhost:3500/api/v1/auth/create-user', formState);
    //     console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    //   } catch (error) {
    //     console.error(error);
    //   }
  };

  return (
    <div>
      <p>Create Teamwork Employee Account:</p>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <label>Last Name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <br />
        <label>email</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <br />
        <label>Gender</label>
        <label>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formState.gender === "male"}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formState.gender === "female"}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>Job Role</label>
        <input
          type="text"
          name="jobRole"
          placeholder="Job Role"
          onChange={handleChange}
          required
        />
        <br />
        <label>
          Department:
          <select
            name="department"
            value={formState.department}
            onChange={handleChange}
            required
          >
            <option value="Logistics">Logistics</option>
            <option value="Service Delivery">Service Delivery</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Design Group">Design Group</option>
          </select>
        </label>
        <br />
        <textarea
          name="address"
          value={formState.address}
          placeholder="Enter address"
          onChange={handleChange}
          rows="10"
          cols="49"
          required
        />
        <h1>
          {formState.firstName} {formState.lastName} {formState.jobrole}
        </h1>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
