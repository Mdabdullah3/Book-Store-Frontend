import React, { useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return <header
    className={`${bg ? 'bg-[#f4f3ec] h-20' : 'h-24'
      } flex items-center fixed top-0 w-full px-5 text-white z-10 transition-all duration-300 `}
  >
    <div className='w-11/12 mx-auto'>

      <div className='hidden lg:block'>
        <DesktopNav />
      </div>
      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </div>
  </header>;
};

export default Navbar;
