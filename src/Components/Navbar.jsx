import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=  () => {

    return (
        <>


<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <label className="animated ms-3 ">✏</label><span className="covid-title">Covid-19</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    


      <ul className="navbar-nav ms-auto me-3">
        <li className="nav-item">
          <NavLink exact className="nav-link " activeClassName="nav-active" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink exact className="nav-link"  activeClassName="nav-active" to="/graph">Graphs</NavLink>
        </li>
  
       
      </ul>
    </div>
  </div>
</nav>




        </>

    );

}


export default Navbar;
