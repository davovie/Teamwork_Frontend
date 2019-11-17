import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="navbar_heading">Teamwork</h1>
        <ul className="navbar_list">
            <li className="navbar_group"><a href="#" className="navbar_link">News Update</a></li>
            <li className="navbar_group"><a href="#" className="navbar_link">Help</a></li>
            <li className="navbar_group"><a href="#" className="navbar_link">Log in</a></li>
        </ul>
      
    </nav>
  );
};

export default Navbar;
