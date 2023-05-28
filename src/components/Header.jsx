import React from 'react';
import Logo from '../assets/logo.svg'
import Image from 'next/image';
const Header = () => {
  return (
    <header id="home" className='py-8 mb-10'>
       <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <Image src={Logo} alt="logo" />
          </a>
          <a href="#contact">
          <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
       </div>
    </header>
  );
};

export default Header;
