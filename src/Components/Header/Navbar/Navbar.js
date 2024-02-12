import React from "react";
import './Navbar.css';



const Navbar = () => {
    return(
        <div className='Navbar'>
         <div className='list'>
          <ul >
            <li ><a id='NavbarFirstElement' href="https://www.w3schools.com">0899940820</a></li>
            <li><a id='NavbarSecondElement' href="https://www.w3schools.com">Категории</a></li>
            <li><a id="NavbarThirdElement" href="https://www.w3schools.com">Карта на преживявания!</a></li>
            <li>search</li>
          </ul>
         </div>
        </div>
    )
}


export default Navbar;
