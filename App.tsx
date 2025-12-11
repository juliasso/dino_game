import React from 'react';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl md:text-4xl mb-4 text-gray-700 tracking-tighter">DINO RUN</h1>
      <div className="relative shadow-xl border-4 border-gray-800 rounded-lg overflow-hidden bg-white">
        <Game />
      </div>
      <p className="mt-6 text-xs md:text-sm text-gray-500 text-center animate-pulse">
        [SPACE] or [TAP] to Jump
      </p>
    </div>
  );
};

export default App;