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
          <Link to="/about" className="text-white text-sm md:text-lg hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link to="/waitlist" className="text-white text-sm md:text-lg hover:text-gray-300 transition-colors">
            Waitlist
          </Link>
          <Link to="/cart"  className="text-white text-sm md:text-lg hover:text-gray-300 transition-colors">
            Cart
          </Link>
          <Button className="ml-4 text-black-900 transition-all duration-300 h-[35px] md:h-[50px] md:w-[80px] w-[45px] text-sm md:text-lg" variant="fill" color="buy_button" >
            Buy
          </Button>
        </nav>

        
      </div>

    </header>
  );
};

export default Header;
