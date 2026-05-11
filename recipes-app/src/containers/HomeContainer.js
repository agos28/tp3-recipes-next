'use client';

import { useState, useEffect } from 'react';
import CardsGrid from '@/components/CardsGrid';
import axios from 'axios';
import Hero from '@/components/hero'

const HomeContainer = () => {
  const [items, setItems] = useState([]);

  const handleGetItems = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0');
      const data = response.data.recipes;
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log('Hubo un error', error);
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  return (
    <div>
      <Hero items={items} />
      <div className="h-12 bg-[#90a955] flex justify-center items-center text-white stack-sans-text">
            <p>Learn how to cook delicious recipes at home !!</p>
      </div>
        <div className="flex justify-center items-center relative">
            <h3 className="uppercase  text-6xl text-[#31572c] pt-12">Choose a recipe</h3>
            <h3 className="text-4xl text-[#ffa500] absolute pt-20">And enjoy it!</h3>
        </div>
        <CardsGrid 
        items={items}
        />
    </div>
  );
};

export default HomeContainer;
