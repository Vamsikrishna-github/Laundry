import React from "react";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import LaundryRequest from "./LaundryRequest";
import LaundryStatus from "./LaundryStatus";
import Nav from "./pro/Nav";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

      <Nav />

      <Routes>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ Dashboard" element={< Dashboard />} />
        <Route path="/LaundryRequest" element={<LaundryRequest />} />
        <Route path="/LaundryStatus" element={<LaundryStatus />} />

      </Routes>


    </div>
  );
}


export default App;