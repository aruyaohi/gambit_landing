'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-transparent text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-semibold text-3xl">
          <span className="text-[#09FF22]">GAM</span>BIT
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#" className="hover:text-[#09FF22] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#09FF22] transition-colors">
            How to play?
          </a>
          <a href="#" className="hover:text-[#09FF22] transition-colors">
            Resources
          </a>
          {/* <a href="#" className="hover:text-green-500 transition-colors">
            Contact
          </a> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 border-2 border-white rounded-md focus:outline-none transition-transform"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-all transform ${isMenuOpen ? 'rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {!isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-black text-white space-y-4 p-6 transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <a href="#" className="block hover:text-[#09FF22] transition-colors">
          About
        </a>
        <a href="#" className="block hover:text-[#09FF22] transition-colors">
          How to Play?
        </a>
        <a href="#" className="block hover:text-[#09FF22] transition-colors">
          Resources
        </a>
      </div>
    </header>
  );
}
