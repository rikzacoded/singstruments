
'use client';
import { createElement, useEffect, useState } from 'react';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000); // Adjust duration if needed

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showSplash) return null;

  return createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("/sing.jpg")',
          
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      },
    },
    createElement(
      'h1',
      {
        style: {
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
        },
      },
      'singstruments'
    )
  );
}

