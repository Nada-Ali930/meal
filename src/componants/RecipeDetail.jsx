import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { idMeal } = useParams(); 
  const [meal, setMeal] = useState(null); 
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if (response.data.meals) {
          setMeal(response.data.meals[0]);   
        }
      } catch (err) {
        setError('Failed to fetch meal details');
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [idMeal]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  if (!meal) return <div>No meal found!</div>;

  return (
    <div className="container p-4 lg:flex">
       <div className="c1 lg:w-1/3">
          <h1 className="text-[48px] font-bold font-Pacifico py-4 ">{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="h-[400px] w-[400px] mb-9 object-cover rounded-xl" />
          <div className="buttoms font-Comic text-center m-auto">
             <a href='#' className='bg-[#DC2626] text-white w-full h-full py-3 px-7 rounded-lg cursor-pointer me-3'><i class="fa-solid fa-globe"></i>sourse</a>
             <a href='#' className='bg-green-color text-white w-full h-full py-3 px-7 rounded-lg cursor-pointer'><i class="fa-brands fa-youtube"></i>youtube</a>
          </div>
       </div>
       <div className="c3 lg:w-1/3 my-10 lg:my-0 lg:px-2 lg:mt-24">
        <p className="mt-4 font-bold font-Comic">{meal.strInstructions}</p>
      </div>
       <div className="c2 font-Comic font-bold bg-white rounded-xl lg:w-1/3  lg:mt-9 p-3">
        <h2 className="text-3xl font-semibold ">Ingredients</h2>
        <hr/>
        <ul className="mt-4">
          {Object.keys(meal)
            .filter(key => key.startsWith('strIngredient') && meal[key])  
            .map((key, index) => (
              <>
              <li key={key} className="flex mt-2 justify-between">
                <span >{meal[key]+':'}</span> 
                <span >{meal[`strMeasure${index + 1}`]}</span>
              </li><hr/> 
              </>
            ))}
            
        </ul>
      </div>
      
    </div>
  );
};

export default RecipeDetail;