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
    <>
    <div className='h-64 bg-[#90a955] relative'>
        <h3 className={`${mrDafoe.className} text-6xl pl-6 text-[#31572c] mt-28 absolute`}>Recipes</h3>
      <h2 className={`${bowlbyOne.className} uppercase text-8xl pl-6 text-white tracking-wider mt-36`}>Made easy</h2>
    </div>
    <div className={`${stackSansText.className} h-12 bg-[#31572c] flex justify-center items-center text-white`}>
        <p>Learn how to cook delicious recipes at home !!</p>
    </div>
    <div className="grid grid-cols-3 p-16 bg-[#FCF9D8]">
        <Image src={item.image} width={288} height={288} alt={item.name} className='object-cover rounded-4xl drop-shadow-xl/25' /> {/* 1 */}
        <div className="col-span-2"> {/* 2 */}
            <h1 className={`${bowlbyOne.className} text-6xl text-[#31572c] uppercase`}>{item.name}</h1>
            <div className="mt-4"> {/* 3 */}
                <h3 className={`${bowlbyOne.className} text-[#90A955] uppercase`}>Ingredients:</h3>
                <p className={`${stackSansText.className} mt-4`}>{item.ingredients}</p>
            </div>
            <div className={`${bowlbyOne.className} flex mt-4 bg-[#90A955] h-12 rounded-4xl items-center justify-evenly drop-shadow-xl/25`}>
                <div className="flex items-center after:content-[''] after:inline-block after:w-0.5 after:h-6 after:bg-[#FCF9D8]">
                    <h4 className="text-[#FCF9D8] uppercase mr-4">Prep Time:</h4>
                    <p className={`${stackSansText.className} mr-4`}>{item.prepTimeMinutes} mins</p>
                </div>
                <div className="flex items-center after:content-[''] after:inline-block after:w-0.5 after:h-6 after:bg-[#FCF9D8]">
                    <h4 className="text-[#FCF9D8] uppercase mr-4">Cook Time:</h4>
                    <p className={`${stackSansText.className} mr-10`}>{item.cookTimeMinutes} mins</p>
                </div>
                <div className="flex items-center">
                    <h4 className="text-[#FCF9D8] uppercase mr-4">Servings:</h4>
                    <p className={stackSansText.className}>{item.servings}</p>
                </div>
            </div>
        </div>
        <div className="col-span-3 pt-16">
            <h3 className={`${bowlbyOne.className} text-[#90A955] uppercase text-2xl`}>Instructions:</h3>
            <p className={`${stackSansText.className} mt-4`}>{item.instructions}</p>
        </div>
    </div>
    </>
   
  );
};

export default RecipeContainer;
