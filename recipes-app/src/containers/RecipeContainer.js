'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { bowlbyOne, mrDafoe, stackSansText } from '@/lib/fonts';
import Image from 'next/image';

const RecipeContainer = ({ id }) => {
  const [item, setItem] = useState({});

  const handleGetRecipe = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      const data = response.data;
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleGetRecipe();
    }, []); 

  return (  
   <div className="grid grid-cols-3 p-16 bg-[#FCF9D8]">
        <Image src={item.image} width={260} height={260} alt={item.name} className='object-cover rounded-4xl' />
        <div className="col-span-2">
            <h1 className={`${bowlbyOne.className} text-6xl text-[#31572c] uppercase`}>{item.name}</h1>
            <div className="mt-4">
                <h3 className={`${bowlbyOne.className} text-[#90A955] uppercase`}>Ingredients:</h3>
                <p className={stackSansText.className}>{item.ingredients}</p>
            </div>
            <div className="flex mt-4">
                <h4 className={`${bowlbyOne.className} text-[#90A955] uppercase mr-6`}>Preparation Time:</h4>
                <p className={`${stackSansText.className} mr-6`}>{item.prepTimeMinutes} min</p>
                <h4 className={`${bowlbyOne.className} text-[#90A955] uppercase mr-6`}>Cooking Time:</h4>
                <p className={`${stackSansText.className} mr-6`}>{item.cookTimeMinutes} min</p>
                <h4 className={`${bowlbyOne.className} text-[#90A955] uppercase mr-6`}>Servings:</h4>
                <p className={`${stackSansText.className}`}>{item.servings}</p>
            </div>
        </div>
        <div className="col-span-3 pt-16">
            <h3 className={`${bowlbyOne.className} text-[#90A955] uppercase text-2xl`}>Instructions:</h3>
            <p className={stackSansText.className}>{item.instructions}</p>
        </div>
    </div>
  );
};

export default RecipeContainer;
