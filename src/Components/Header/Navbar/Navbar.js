import React from "react";
import './Navbar.css';



const Navbar = () => {
    return(
        <div className='Navbar'>
         <div className='list'>
          <ul >
            <li><a className='NavbarLink' id='NavbarFirstElement' href="https://www.w3schools.com">0899940820</a></li>
            <div class="dropdown">
              <button class="dropbtn">Категории</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <li><a className='NavbarLink' id="NavbarThirdElement" href="https://www.w3schools.com">Карта на преживявания!</a></li>
            <li><a id="NavbarFourthElement" href="https://www.w3schools.com"><img id="searchImg" alt="search" src="assets\pics\search.svg "/></a></li>
          </ul>
         </div>
        </div>
    )
}


export default Navbar;
