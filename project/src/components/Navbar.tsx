import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Printer className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">PrintEasy</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/admin"
              className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
            >
              Admin
            </Link>
            <Link
              to="/login"
              className="flex items-center px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;