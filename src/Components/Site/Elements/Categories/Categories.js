import React from "react";
import './Categories.css';

const Categories = () => {
    return (
        <div className='GlobalCategoriesWraper'>
            <div className='CategoriesWraper MaxWidth'>
                <h2>КАТЕГОРИИ</h2>
                <div className='Categories '>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category4.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Бягство от града</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category3.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Вкусове и Аромати</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category2.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Екстремни</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category1.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Забавления в града</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category5.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Ексклузивни предложения</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category6.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Приключения на открито</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category7.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Спа и Красота</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category8.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>За нея</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category9.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>За него</p>
                    </div>
                    <div className='CategoryCard'>
                        <div className="category">
                            <a href="https://www.w3schools.com">
                                <img id='CatImg' src="assets/pics/category10.jpg" alt="Category" ></img>
                            </a>
                        </div>
                        <p>Подарък за рожден ден</p>
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