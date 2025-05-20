import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  year?: string;
  image: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  year,
  image,
  className = ""
}) => {
  return (
    <section className={`relative pt-24 pb-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-7xl md:text-8xl font-normal text-white mb-4">{title}</h1>
            
            {year && (
              <div className="flex items-center mb-6">
                <img src="/images/img_group_white_a700.svg" alt="Year Icon" className="mr-1 h-3 w-3" />
                <span className="text-sm text-white font-medium">{year}</span>
              </div>
            )}
            
            {subtitle && (
              <p className="text-2xl md:text-3xl text-white font-normal">{subtitle}</p>
            )}
          </div>
          
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;