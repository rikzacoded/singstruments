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
    <div className="w-1/2 max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-8 px-4">
      <div className="h-56 sm:h-72 md:h-96">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full rounded-xl object-cover shadow-xl border-2 border-indigo-950"
        />
      </div>
    </div>
  );
};

export default Carousel;