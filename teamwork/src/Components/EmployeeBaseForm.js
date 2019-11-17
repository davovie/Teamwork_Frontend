import React from "react";
import { Form, Field, ErrorMessage } from "formik";


export default ({ isSubmitting }) => (
    <Form>
      <label className="form_label col-one-half">
        <span className="label_text">First Name</span>
        <Field
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <ErrorMessage name="firstName" component="div" />
      </label>
      <label className="form_label col-one-half">
        <span className="label_text">Last Name</span>
        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <ErrorMessage name="lastName" component="div" />
      </label>
      <label className="form_label">
        <span className="label_text">email</span>
        <Field type="text" name="email" placeholder="email" required />
        <ErrorMessage name="email" component="div" />
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
        <Field
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ErrorMessage name="password" component="div" />
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
        <Field
          type="password"
          name="confirmpassword"
          placeholder="Retype Password"
          required
        />
        <ErrorMessage name="confirmpassword" component="div" />
      </label>
      <label className="gender col-one-half">
        <span className="radio_text label_text">Gender</span>
        <label className="radiobtn">
          <Field type="radio" name="gender" value="male" required />
          <ErrorMessage name="gender" component="div" />
          Male
        </label>
        <label className="radiobtn">
          <Field type="radio" name="gender" value="female" required />
          <ErrorMessage name="gender" component="div" />
          Female
        </label>
      </label>
      <label className="form_label col-one-half">
        <span className="label_text">Job Role</span>
        <Field
          type="text"
          name="jobRole"
          placeholder="Job Role"
          required
        />
        <ErrorMessage name="jobRole" component="div" />
      </label>
      <div>
        <label className="select_label" for="department">
          <span className="select_text">Department</span>
        </label>

        <Field
          as="select"
          className="select"
          name="department"
          id="department"
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
        </Field>
        <ErrorMessage name="department" component="div" />
      </div>

      <Field
        as="textarea"
        className="form_label"
        name="address"
        placeholder="Enter address"
        rows="5"
        cols="50"
        required
      />
      <ErrorMessage name="address" component="div" />
      <br />
      <button type="submit" className="submit">
        Create Account
      </button>
    </Form>
  )