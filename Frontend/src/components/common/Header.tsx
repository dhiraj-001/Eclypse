import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${className} fixed top-0 left-0 w-full flex h-20 z-50 bg-[#0000008f] bg-opacity-30  shadow-md transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-opacity-80' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/img_frame_19.png" alt="Eclypse Logo" className="h-12 w-12 rounded-md" />
          </Link>
        </div>

        <nav className=" flex items-center md:space-x-14 space-x-5">
          <Link to="/about" className="text-white text-lg hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link to="/waitlist" className="text-white text-lg hover:text-gray-300 transition-colors">
            Waitlist
          </Link>
          <Link to="/cart"  className="text-white text-lg hover:text-gray-300 transition-colors">
            Cart
          </Link>
          <Button className="ml-4 text-black-900 transition-all duration-300 h-[40px] w-[39px]" variant="fill" color="buy_button" size="xs">
            Buy
          </Button>
        </nav>

        
      </div>

      {isCartOpen && (
        <div className="absolute right-0 top-full bg-white shadow-lg p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg">Your Cart</h3>
            <button onClick={toggleCart}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="text-center py-8 text-gray-500">Your cart is empty</div>
          <Button className="w-full mt-4" variant="fill" color="black_900" size="xs">
            Checkout
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
