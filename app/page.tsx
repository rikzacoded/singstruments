

'use client';

import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/splashscreen';
import Header from '../components/header';
import Carousel from '../components/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';



export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main
      className="min-h-screen w-full bg-cover"
      style={{ backgroundImage: "url('/sing_it2.jpg')" }}
    >
      <div className="backdrop-blur-sm bg-black/40 min-h-screen">
        <Header />
        <Carousel />
        <h1 className="text-white mt-9 text-center text-4xl font-bold">Want to apply?</h1>
        {/* <Link href="/apply">
                <Button className=" ml-96 rounded-md ">Vocalist</Button>
              </Link>
              <Link href="/apply">
                <Button className="  rounded-md ">Instrumentalist</Button>
              </Link> */}
              <div className="flex mt-4 space-x-4 justify-center">
  <Link href="/apply/vocalist">
    <Button className="rounded-md px-18 mb-6">Vocalist</Button>
  </Link>
  <Link href="/apply/instrumentalist">
    <Button className="rounded-md mb-6">Instrumentalist</Button>
  </Link>
</div>

      </div>
      
    </main>
  );
}
