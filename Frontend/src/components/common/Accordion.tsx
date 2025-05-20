import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  children, 
  className = "",
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b pb-5 border-[#585858] ${className}`}>
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <h3 className="text-3xl font-normal text-white">{title}</h3>
        <div className="transform transition-transform duration-200">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <img src="/images/down.svg" alt="Expand" className="h-8 w-8" />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;