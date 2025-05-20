import React, { useState } from 'react';

interface CardProps {
  image: string;
  className?: string;
  onClick?: () => void;
  alt?: string;
  rounded?: boolean;
  hoverText?: string;
}

const Card: React.FC<CardProps> = ({ 
  image, 
  className = "", 
  onClick,
  alt = "Product Image",
  rounded = true,
  hoverText = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden ${rounded ? 'rounded-md' : ''} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={alt} 
        className="object-cover w-full h-full transition-transform duration-300 cursor-pointer relative z-0" 
      />
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black-700 transition-opacity duration-300 pointer-events-none z-10" 
        style={{ opacity: isHovered ? 0.6 : 0 }}
      >
      </div>
      <div 
        className={`absolute w-10/12 text-[12px] left-1 md:left-4 bottom-3 md:bottom-10 z-20 text-white md:text-4xl font-medium pointer-events-none transition-all  duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {hoverText}
      </div>
    </div>
  );
};

export default Card;
