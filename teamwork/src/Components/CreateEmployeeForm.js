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

  const handleSubmit = async event => {
    event.preventDefault();
    const url = "http://localhost:3500/api/v1/auth/create-user";

    try {
      const response = await fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(formState), // data can be `string` or {object}!
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
  };

  return (
    <div className="form_create_account">
      <p className="center">Create Teamwork Employee Account:</p>
      <form onSubmit={handleSubmit}>
        <label className="form_label col-one-half">
          <span className="label_text">First Name</span>
          <input
            type="text"
            name="firstName"
            value={formState.firstName}
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </label>
        <label className="form_label col-one-half">
          <span className="label_text">Last Name</span>
          <input
            type="text"
            name="lastName"
            value={formState.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </label>
        <label className="form_label">
          <span className="label_text">email</span>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
        </label>
        <label className="password col-one-half">
          <span className="label_text">Password</span>
          <button
            className="toggle-visibility"
            title="toggle password visibility"
            tabindex="-1"
          >
            <span className="glyphicon glyphicon-eye-close"></span>
          </button>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>
        <label className="password col-one-half">
          <span className="label_text">Confirm Password</span>
          <button
            className="toggle-visibility"
            title="toggle password visibility"
            tabindex="-1"
          >
            <span className="glyphicon glyphicon-eye-close"></span>
          </button>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Retype Password"
            onChange={handleChange}
            required
          />
        </label>
        <label className="gender col-one-half">
          <span className="radio_text label_text">Gender</span>
          <label className="radiobtn">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formState.gender === "male"}
              onChange={handleChange}
              required
            />Male
          </label>
          <label className="radiobtn">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formState.gender === "female"}
              onChange={handleChange}
              required
            />Female
          </label>
        </label>
        <label className="form_label col-one-half">
          <span className="label_text">Job Role</span>
          <input
            type="text"
            name="jobRole"
            placeholder="Job Role"
            onChange={handleChange}
            required
          />
        </label>
        <div>

        <label className="select_label" for="department">
          <span className="select_text">Department</span>
          </label>

          <select
          className="select"
            name="department"
            id="department"
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
        </div>

        <textarea
          className="form_label"
          name="address"
          value={formState.address}
          placeholder="Enter address"
          onChange={handleChange}
          rows="5"
          cols="50"
          required
        />
        <br />
        <button type="submit" className="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}
