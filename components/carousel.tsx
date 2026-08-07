'use client';
import React, { useEffect, useState } from 'react';

const images = [
  '/inst.jpg',
  '/guitarist.jpg',
  '/singer4.jpg',
  '/sitaar.jpg',
  '/aimasings.jpg',
  '/flute.jpg',
  '/tabla.jpg',
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
return (
  <div className="w-full max-w-5xl mx-auto px-4 mt-4  sm:mt-6 md:mt-8">
    <div className="relative aspect-[16/9]">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full  bg-black/84 rounded-xl object-cover shadow-xl border-2 border-indigo-950"
      />

    <h2
  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white font-bold drop-shadow-lg"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  <div>
    <span className="text-xl sm:text-2xl md:text-3xl">Where </span>
    <span className="text-4xl sm:text-3xl md:text-5xl">Passion</span>
    <span className="text-xl sm:text-2xl md:text-3xl"> Meets</span>
  </div>

  <span className="text-4xl sm:text-5xl md:text-7xl leading-none">
    Performance
  </span>
</h2>
    </div>
  </div>
);
};

export default Carousel;