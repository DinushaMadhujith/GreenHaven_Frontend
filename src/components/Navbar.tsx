import { Menu, X, ShoppingCart, LogIn, UserPlus, Leaf, Droplet } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Leaf className="absolute h-8 w-8 text-green-600" />
              <Droplet className="absolute h-4 w-4 text-teal-500 right-0 top-0" />
            </div>
            <span className="text-2xl font-bold text-gray-800">
              Green<span className="text-teal-600">Haven</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</a>
            <a href="#shop" className="text-gray-700 hover:text-teal-600 transition-colors">Shop</a>
            <a href="#fertilizer" className="text-gray-700 hover:text-teal-600 transition-colors">Fertilizer</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          </div>

          {/* Auth & Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors">
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </button>
            <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors">
              <UserPlus className="h-5 w-5 mr-1" />
              Sign Up
            </button>
            <button className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-5 w-5 bg-teal-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-teal-600">About Us</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Services</a>
            <a href="#shop" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Shop</a>
            <a href="#fertilizer" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Fertilizer</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Contact</a>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button className="flex w-full items-center px-3 py-2 text-gray-700 hover:text-teal-600">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </button>
              <button className="flex w-full items-center px-3 py-2 text-gray-700 hover:text-teal-600">
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </button>
              <button className="flex w-full items-center px-3 py-2 text-gray-700 hover:text-teal-600">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
