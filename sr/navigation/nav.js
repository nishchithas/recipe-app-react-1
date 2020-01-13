import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.png'
import '../App.css';

const Nav = () => {
    const navStyle = {color:'black'};
    const imgStyle = {height:'10vh'};
    return (
          <nav>
            <ul className="nav-links">
                <Link to="/home">
                <li>
                    <img style={imgStyle} src={logo} alt="logo"></img>
                </li>
                </Link>
                <Link style={navStyle} to="/home">
                    <li>
                        Home
                    </li>
                </Link>
                <Link style={navStyle} to="/services">
                    <li>
                    Nutrition Analysis
                    </li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>
                        About Us
                    </li>
                </Link>
                <Link style={navStyle} to="/contactus">
                    <li>
                        Contact Us
                    </li>
                </Link>
            </ul>
          </nav>
      )
} 

  export default Nav;
