import React from "react";
import Navbar from './Navbar/Navbar';
import './Header.css';

const Header = () => {
    return(
        <div className='HeaderWrapper'>
          <div className='MaxWidth Header'>
            <img alt="logo" src="assets\pics\logo.webp"/>
            <Navbar/>
          </div>
        </div>
    )
}



export default Header;