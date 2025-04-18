import { createElement } from 'react';

export default function SplashScreen() {
  return createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("/sing_it2.jpg")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
      },

    },
    createElement(
      'h1',
      {
        style: {
          color: 'white',fontSize: '3rem', fontWeight: 'bold',
        },
      },
      'singstruments'
    )
  );
}
