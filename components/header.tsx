'use client';
import React from 'react';
import NavbarButton from './navbarButtons';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center px-4 sm:px-6 md:px-8 py-4 gap-4 sm:gap-0">
      <h1 className="text-white text-xl sm:text-2xl font-bold">
        singstruments
      </h1>

      <nav className="bg-black mt-2 sm:mt-4 rounded-full sm:ml-8 md:ml-20 lg:ml-72 px-4 sm:px-6 py-2 shadow-md">
        <NavbarButton />
      </nav>

      {/* <Link href="/apply">
        <Button className="ml-92 rounded ">Apply Now</Button>
      </Link> */}
    </header>
  );
};

export default Header;