import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={{ float: "right" }}>

      <button><Link to="/Registration" path="/Registration" > SignUp </Link></button>
      <button><Link to="/ Dashboard" path="/ Dashboard" >  Dashboard </Link></button>
      <button><Link to="/LaundryRequest" path="./LaundryRequest" > LaundryRequest</Link></button>
      <button><Link to="/LaundryStatus" path="/LaundryStatus" > LaundryStatus </Link></button> <br />

    </div >
  );
}


export default Nav;