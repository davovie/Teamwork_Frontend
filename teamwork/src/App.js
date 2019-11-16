import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import CreateEmployeeForm from "./Components/CreateEmployeeForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <CreateEmployeeForm />
    </div>
  );
};

export default App;
