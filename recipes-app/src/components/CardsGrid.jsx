import Card from '@/components/Card';

const CardsGrid = ({ items, title }) => {

  return (
    <div className='grid grid-cols-4 grid-rows-5 gap-4 py-16 px-16 stack-sans-text text-[#31572c]'>
      <h2 className='col-span-full text-3xl font-black tracking-tight text-white sm:text-4xl'>{title}</h2>
      {items.map(({id, name, image}, index) =>
       <Card key={index} name={name} image={image} id={id} />
      )}
    </div>
  );
};

export default CardsGrid;
