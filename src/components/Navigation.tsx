import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navigation() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-900 bg-blue-900/5' : 'text-gray-600 hover:text-blue-900 hover:bg-blue-900/5';
  };

  const getInitials = (email: string) => {
    return email
      .split('@')[0]
      .split(/[^a-zA-Z]/)
      .slice(0, 2)
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-900/10 p-2 rounded-lg">
                <MessageSquare className="h-8 w-8 text-blue-900" />
              </div>
              <span className="ml-2 text-xl font-bold text-blue-900">LegalAI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-12">
            <Link to="/" className={`px-3 py-2 rounded-lg transition ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/chatbot" className={`px-3 py-2 rounded-lg transition ${isActive('/chatbot')}`}>
              Chatbot
            </Link>
            <Link to="/summarization" className={`px-3 py-2 rounded-lg transition ${isActive('/summarization')}`}>
              Summarization
            </Link>
          </div>
          
          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  {user?.email ? getInitials(user.email) : 'NA'}
                </div>
                <button
                  onClick={logout}
                  className="text-blue-900 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900/10 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/chatbot"
                  className="text-blue-900 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900/10 transition"
                >
                  Login
                </Link>
                <Link
                  to="/chatbot"
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-900 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg transition ${isActive('/')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/chatbot"
                className={`px-3 py-2 rounded-lg transition ${isActive('/chatbot')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Chatbot
              </Link>
              <Link
                to="/summarization"
                className={`px-3 py-2 rounded-lg transition ${isActive('/summarization')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Summarization
              </Link>
              
              {isAuthenticated ? (
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                      {user?.email ? getInitials(user.email) : 'NA'}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-blue-900 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900/10 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 px-3">
                  <Link
                    to="/chatbot"
                    className="text-blue-900 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900/10 transition text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/chatbot"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}