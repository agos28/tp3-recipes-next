import Card from '@/components/Card';

const CardsGrid = ({ items }) => {

  return (
    <div className='grid grid-cols-4 grid-rows-5 gap-4 py-16 px-16 text-[#31572c]'>
      {items.map(({id, name, image}, index) =>
       <Card key={index} name={name} image={image} id={id} />
      )}
    </div>
  );
};

export default CardsGrid;
