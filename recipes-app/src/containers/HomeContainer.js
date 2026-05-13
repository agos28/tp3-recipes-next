'use client';

import { useState, useEffect } from 'react';
import CardsGrid from '@/components/CardsGrid';
import axios from 'axios';
import Hero from '@/components/Hero'
import { bowlbyOne, mrDafoe, stackSansText } from '@/lib/fonts';

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleGetItems();
  }, []);

  return (
    <div className='bg-[#FCF9D8]'>
      <Hero items={items} />
      <div className={`${stackSansText.className} h-12 bg-[#90a955] flex justify-center items-center text-white`}>
            <p>Learn how to cook delicious recipes at home !!</p>
      </div>
        <div className="flex justify-center items-center relative">
            <h3 className={`${bowlbyOne.className} uppercase  text-6xl text-[#9c1e1e] pt-12 tracking-wider`}>Choose a recipe</h3>
            <h3 className={`${mrDafoe.className} text-4xl text-[#90A955] absolute pt-20`}>And enjoy it!</h3>
        </div>
        <CardsGrid 
        items={items}
        />
    </div>
  );
};

export default HomeContainer;
