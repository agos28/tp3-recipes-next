import Link from 'next/link';
import items from '@/lib/navItems';

import { bowlbyOne } from '@/lib/fonts'

const Navbar = () => {
  

  return (
    <header className={`${bowlbyOne.className} flex items-center justify-end text-white h-12 uppercase fixed z-10 w-full backdrop-blur-md`}>
      <nav>
        <ul className='flex gap-14 pr-6 tracking-wider'>
          {items.map((item, index) => (
            <li key={index}>
                <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
