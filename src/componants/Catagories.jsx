import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [cats, setCats] = useState([]);   
  const [meals, setMeals] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('All');  

  
  async function getCategories() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setCats(data.categories);
  }

  
  async function getMealsByCategory(category) {
    if (category === 'All') {
      let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setMeals(data.meals); 
    } else {
      let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      setMeals(data.meals);
    }
  }

  useEffect(() => {
    getCategories();   
    getMealsByCategory('All');
  }, []);

 
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    getMealsByCategory(category);
  };

  return (
    <div className="container  p-4">
      <div className="lg:hidden">
        <select 
          className="w-full p-3 border border-gray-300 rounded-md"
          value={selectedCategory} 
          onChange={(e) => handleCategoryChange(e.target.value)} 
        >
          <option value="All">All</option>
          {cats && cats.map((category, index) => (
            <option key={index} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden lg:flex flex-wrap gap-4  ">
        
        <div 
          className={` flex justify-center items-center w-14 h-10  border-2 border-gray-200 rounded-full text-center text-lg font-bold font-Comic text-[#4B5563] hover:bg-[#F9FAFB]  transition-all hover:shadow-xl cursor-pointer 
            ${selectedCategory === 'All' ? 'bg-black !text-white hover:bg-black  hover:!shadow-none' : ''}`}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </div>
        {cats && cats.map((category, index) => (
          <div 
            key={index} 
            className={`flex justify-center items-center w-auto h-auto px-3 py-1  border-2 border-gray-300 rounded-full text-center font-bold text-lg font-Comic text-[#4B5563] hover:bg-[#F9FAFB]   transition-all hover:shadow-lg cursor-pointer
              ${selectedCategory === category.strCategory ? 'bg-black !text-white hover:!shadow-none hover:bg-black' : ''}`}
            onClick={() => handleCategoryChange(category.strCategory)}
          >
            {category.strCategory}
          </div>
        ))}
      </div>
     <hr/>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-24 pt-10 ">
        {meals && meals.map((meal, index) => (
          <div 
            key={index} id='animate'
            className="bg-white py-7 rounded-[15%] font-Comic  shadow-md hover:shadow-lg transition-all cursor-pointer "
          >
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
              className=" h-[200px] w-[200px] object-cover rounded-full m-auto drop-shadow-2xl"
            />
            <p className="text-center mt-2 text-2xl font-[900] text-gray-700 ">{meal.strMeal}</p>
            <h5 class="flex justify-center items-center font-[800] gap-2 text-green-color my-2">{selectedCategory === 'All'&& <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>} {meal.strArea} </h5>
            <div className="text-center ">
            <Link to={`/mealdetails/${meal.idMeal}`} className='bg-green-color font-[900] rounded-3xl px-8 text-white py-2 my-2 '>View Recipe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}