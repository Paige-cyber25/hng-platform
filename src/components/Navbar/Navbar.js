import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
const Navbar = () => {
    const isActive = {
        fontWeight: "bold",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      };
      
    return (
        <div className={classes.navbarContainer}>
            <h2 className={classes.logo}>HNG</h2> 
            <ul className={classes.linkWrapper}>
                <li>
                <NavLink to="/about" className={classes.navLink} activeStyle={isActive}>About</NavLink>
                </li>
                <li>
                <NavLink to="/login" className={classes.navLink} activeStyle={isActive}>Login</NavLink>  
                </li>
            </ul>
            
           
           
        </div>
    )
}

export default Navbar;
