import React from "react";
import Navbar from './Navbar/Navbar';
import './Header.css';

const Header = () => {
    return(
        <div className='Header'>
            <img alt="logo" src="assets\pics\logo.webp "
            />
            <Navbar/>
        </div>
    )
}



export default Header;