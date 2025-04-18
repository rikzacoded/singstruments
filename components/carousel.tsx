'use client';
import React, { useEffect, useState } from 'react';

const images = [ '/instruments1.jpg','singer7.jpg', '/singer4.jpg','/sitaar.jpg', '/aimasings.jpg','/flute.jpg', '/tabla.jpg'];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl h-96 mx-56 mt-8 ">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full rounded-xl object-cover/contain shadow-xl border-2 border-indigo-950"
      />
      
    </div>
  );
};

export default Carousel;
