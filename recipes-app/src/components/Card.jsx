import Link from 'next/link';
import Image from 'next/image';

import { stackSansText } from '@/lib/fonts';

const Card = ({ id, image, name }) => {
  return (
    <article className='bg-[#90a95592] p-4 rounded-4xl mb-4 drop-shadow-xl/25 transition delay-75 duration-150 ease-in-out hover:scale-105'>
      <Image src={image} width={200} height={200} alt={name} className='w-full h-44 object-cover rounded-4xl' />

      <h3 className={`${stackSansText.className} mt-2 text-lg text-white h-12`}>
        {name}
      </h3>

      <div className='flex mt-6'>
        <Link
          className={`${stackSansText.className} p-2 rounded-full bg-[#90A955] text-white w-full flex justify-center transition ease-in-out hover:bg-[#ededed] hover:text-[#90A955]`} href={`/recipe/${id}`}
        >
          Learn recipe
        </Link>
      </div>
    </article>
  );
};

export default Card;