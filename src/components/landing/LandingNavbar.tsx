
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Templates', path: '/templates' },
    { name: 'Features', path: '/features' },
    { name: 'Examples', path: '/examples' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">ResumeBuilder</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/builder">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-4 z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2" />
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/builder">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
