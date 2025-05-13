
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const BuilderNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary">ResumeBuilder</span>
          </Link>
          <div className="hidden md:flex items-center ml-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Save
          </Button>
          
          <Button size="sm">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default BuilderNavbar;
