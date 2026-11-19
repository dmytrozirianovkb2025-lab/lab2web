import React from 'react';

function Header({ theme, onToggleTheme }) {
  return (
    <header className="rounded-2xl bg-black px-6 py-10 text-center text-white shadow-lg relative">
      <h1 className="mb-3 text-4xl font-bold tracking-wide sm:text-5xl">
        Резюме
      </h1>
      <p className="text-lg text-blue-100 mb-4">
        Junior-розробник
      </p>

      
      <button
        onClick={onToggleTheme}
        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors cursor-pointer"
      >
        {theme === 'light' ? '🌙 Увімкнути темну' : '☀️ Увімкнути світлу'}
      </button>
    </header>
  );
}

export default Header;