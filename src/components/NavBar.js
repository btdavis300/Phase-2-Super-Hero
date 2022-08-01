import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/categories">Categories</Link>
        </div>
    );
};

export default NavBar;