import Link from 'next/link';
import items from '@/lib/navItems';



const Navbar = () => {
  

  return (
    <header className='flex items-center justify-end text-white h-12 uppercase bowlby-one-regular fixed z-10 w-full'>
      <nav>
        <ul className='flex gap-6 pr-6'>
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
