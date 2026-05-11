import Link from 'next/link';
import Image from 'next/image';

const Card = ({ id, image, name }) => {
  return (
    <article className='bg-white p-4 border-2 border-[#90A955] rounded w-64 mb-4'>
      <Image src={image} width={200} height={200} alt={name} className='w-full h-40 object-cover' />

      <h3 className='mt-2 text-lg'>
        {name}
      </h3>

      <div className='flex justify-center items-center mt-6'>
        <Link
          className='p-2 rounded-full bg-[#90A955] text-white' href={`/recipe/${id}`}
        >
          Learn recipe
        </Link>
      </div>
    </article>
  );
};

export default Card;