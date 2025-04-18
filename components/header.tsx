'use client';
import React from 'react';
import NavbarButton from './navbarButtons';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="flex  items-center px-8 py-4">
      <h1 className="text-white text-2xl font-bold">singstruments</h1>
      <nav className="bg-black mt-4 rounded-full ml-72  px-6 py-2 shadow-md">
       <NavbarButton/>
      </nav>
      {/* <Link href="/apply">
        <Button className="ml-92 rounded ">Apply Now</Button>
      </Link> */}
    </header>
  );
};

export default Header;
