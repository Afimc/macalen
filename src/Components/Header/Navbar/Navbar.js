import React from "react";
import './Navbar.css';



const Navbar = () => {
    return(
        <div className='Navbar'>
         <div className='list'>
          <ul >
            <li><a className='NavbarLink' id='NavbarFirstElement' href="https://www.w3schools.com">0899940820</a></li>
            <li><a className='NavbarLink' id='NavbarSecondElement' href="https://www.w3schools.com">Категории</a></li>
            <li><a className='NavbarLink' id="NavbarThirdElement" href="https://www.w3schools.com">Карта на преживявания!</a></li>
            <li><a id="NavbarFourthElement" href="https://www.w3schools.com"><img id="searchImg" alt="search" src="assets\pics\search.svg "/></a></li>
          </ul>
         </div>
        </div>
    )
}


export default Navbar;
