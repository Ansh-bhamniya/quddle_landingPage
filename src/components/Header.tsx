'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Logo from '@/components/Logo';

interface HeaderProps {
  currentSection: number;
}

export default function Header({ currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Determine header styling based on current section
  const isScrolled = currentSection > 0;
  const isInSection2 = currentSection === 2;
  const isInSection3 = currentSection === 3;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent font-serif transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Logo size="md" isScrolled={isScrolled} isInSection2={isInSection2} isInSection3={isInSection3} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className={`text-lg transition-colors duration-300 ${
                isInSection2 || isInSection3
                  ? 'text-black hover:text-white' 
                  : isScrolled 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-black hover:text-gray-200'
              } transition-colors duration-200 hover:bg-transparent font-serif`}
            >
              Advertisers
            </Button>

            <Button
              variant="ghost"
              className={`text-lg transition-colors duration-300 ${
                isInSection2 || isInSection3
                  ? 'text-black hover:text-white' 
                  : isScrolled 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-black hover:text-gray-200'
              } transition-colors duration-200 hover:bg-transparent font-serif`}
            >
              Sellers
            </Button>
            <Button
              variant="ghost"
              className={`text-lg transition-colors duration-300 ${
                isInSection2 || isInSection3
                  ? 'text-black hover:text-white' 
                  : isScrolled 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-black hover:text-gray-200'
              } transition-colors duration-200 hover:bg-transparent font-serif`}
            >
              Login
            </Button>
            <Button 
              variant="ghost"
              className={`text-lg transition-colors duration-300 ${
                isInSection2 || isInSection3
                  ? 'text-black hover:text-white' 
                  : isScrolled 
                    ? 'text-white hover:text-gray-200' 
                    : 'text-black hover:text-gray-200'
              } transition-colors duration-200 hover:bg-transparent font-serif`}
            >
              Sign Up
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-lg transition-colors duration-300 ${
              isInSection2 || isInSection3
                ? 'text-black hover:text-gray-800' 
                : isScrolled 
                  ? 'text-white hover:text-gray-200' 
                  : 'text-black hover:text-gray-200'
            } transition-colors duration-200`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black rounded-b-2xl shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-gray-200 hover:bg-white/10 font-serif text-lg rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Advertiser
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-gray-200 hover:bg-white/10 font-serif text-lg rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Seller
              </Button>
              <Button
                variant="outline"
                className="w-full justify-center text-white border-white/30 hover:bg-white/20 font-serif text-lg rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
              <Button
                className="w-full justify-center bg-white text-gray-900 hover:bg-gray-100 font-serif text-lg rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}