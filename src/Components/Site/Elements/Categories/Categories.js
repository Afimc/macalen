import React from "react";
import './Categories.css';




const Categories = () => {
    return (
        <div className='GlobalCategoriesWraper'>
        <div className='CategoriesWraper MaxWidth'>
            <h1>Категории</h1>
            <div className='Categories '>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category1.jpg" alt="Category" ></img>
                    </a>
                    <a href="https://www.w3schools.com"> вкусове</a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category2.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category3.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category4.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category5.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category6.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category7.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category8.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category9.jpg" alt="Category" ></img>
                    </a>
                </div>
                <div className="category">
                    <a href="https://www.w3schools.com">
                        <img src="assets/pics/category10.jpg" alt="Category" ></img>
                    </a>
                </div>

            </div>
            <div className='CategoriesLogo'>
            <img id="CatLogo" alt='logo' src="assets/pics/CategoriesLogo.jpg"></img>
            </div>
            

        </div>


        </div>


    )
}




export default Categories;