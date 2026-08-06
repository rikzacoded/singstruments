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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/sing_it2.jpg')" }}
    >
      <div className="backdrop-blur-sm bg-black/40 min-h-screen">
        <Header />

        <Carousel />

        <h1 className="mt-8 px-4 text-center text-2xl font-bold text-white sm:mt-10 sm:text-3xl md:text-4xl">
          Want to apply?
        </h1>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 px-4 pb-8 sm:flex-row">
          <Link href="/apply/vocalist" className="w-full sm:w-auto">
                <Button className="w-full sm:w-52 rounded-md">
                 Vocalist
               </Button>
            </Link>

             <Link href="/apply/instrumentalist" className="w-full sm:w-auto">
            <Button className="w-full sm:w-52 rounded-md">
             Instrumentalist
           </Button>
           </Link>
        </div>
      </div>
    </main>
  );
}