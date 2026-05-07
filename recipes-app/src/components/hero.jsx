import Link from 'next/link';
import Image from 'next/image';

const Card = ({ id, image, name }) => {
  return (
    <article className='w-72 mt-10'>
      <Image src={image} width={200} height={200} alt={name} className='w-full h-40 object-cover' />


    </article>
  );
};

export default Card;