// eslint-disable-next-line
import React from "react";
import { Formik } from "formik";
import EmployeeBaseForm from "./EmployeeBaseForm";
import { string, ref, object } from "yup";

const handleSubmit = async (values, { setSubmitting }) => {
  const url = "http://localhost:3500/api/v1/auth/create-user";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log('success', JSON.stringify(json))
  } catch (error) {
    console.error("Error:", error);
  }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
  jobRole: "",
  department: "",
  address: ""
};

const employeeValidationFields = {
  firstName: string()
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  lastName: string()
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  email: string()
    .email("Invalid email addresss")
    .required("Required"),
  password: string()
    .min(8, "Must be 8 characters or more")
    .max(40, "Must be 40 characters or less")
    .matches(
      /^(?=.*?[#?!@$%^&*-]).{8,}$|.{15}/,
      "Must have at least one special character or be at least 15 characters long"
    )
    .matches(
      /^(?=.*?[A-Z]).{8,}$|.{15}/,
      "Must have at least one uppercase character or be at least 15 characters long"
    )
    .matches(
      /^(?=.*?[a-z]).{8,}$|.{15}/,
      "Must have at least one lowercase character or be at least 15 characters long"
    )
    .matches(
      /^(?=.*?[0-9]).{8,}$|.{15}/,
      "Must have at least one integer or be at least than 15 characters long"
    )
    .required("Required"),
  confirmpassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Required"),
  gender: string()
    .oneOf(["male", "female"])
    .required("Required"),
  address: string()
    .max(200, "Must be 200 characters or less")
    .required("Required")
};

export default function CreateEmployee() {
  return (
    <div className="form_create_account">
      <p className="center">Create Teamwork Employee Account:</p>
      <Formik
        initialValues={initialValues}
        validationSchema={object(employeeValidationFields)}
        onSubmit={handleSubmit}
      >
        {EmployeeBaseForm}
      </Formik>
    </div>
  );
}
