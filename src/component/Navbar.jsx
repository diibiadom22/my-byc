import React from "react";
import { Link } from "react-router-dom";
import { Byc } from "../assets";
import { Search } from "../assets";
import { Cart } from "../assets";
import { Group } from "../assets";
import { Vector } from "../assets";
import "./style.css";


const Navbar = () => {
  return (
    <React.Fragment>
      
       <div className="setting">
              <nav className="navbar navbar-expand-lg navbar-light mt-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav" style={{marginLeft:'-5px'}}>
                    <li className="nav-item">
                      <Link className="nav-link mr-3" to="/camsole">Shop Products <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link mr-3" to="/blogs">Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link mr-3" to="/macbook">FAQ</Link>
                    </li>
                  </ul>

                  <Link className="navbar-brand m-auto" to="/"><img src={ Byc } alt="logo"/></Link>

                  <ul className="navbar-nav">
                    <li className="nav-item mr-3">
                      <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="/Allproducts" className="nav-link"><img src={ Search } alt="search"/></Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="/" className="nav-link"><img src={ Vector } alt="search"/></Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="/" className="nav-link"><img src={ Group } alt="search"/></Link>
                    </li>
                    <li className="nav-item mr-3">
                      <Link to="/boxers" className="nav-link"><img src={ Cart } alt="search"/></Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          
        
        

    
    </React.Fragment>
  );
};

export default Navbar;
