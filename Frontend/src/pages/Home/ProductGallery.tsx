import React, { useState } from 'react';
import Card from '../../components/common/Card';

interface ProductGalleryProps {
  className?: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className={`md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className='col-span-3 md:col-span-2 w-full '>
            <video
              autoPlay loop muted
              className="object-cover w-full h-full rounded-md"
            >
              <source src="https://res.cloudinary.com/dcfrgqt75/video/upload/v1747730896/c349wobsf6iwuy2vfdlv.mp4" /> // github doesnot support upload more than 50 mb
            </video>

          </div>

          <Card
            hoverText="Premium wool blend in signature vermilion"
            image="/images/img_frame_18_489x424.png"
            className="aspect-square lg:aspect-auto"
            alt="Fashion Detail"
          />

          <Card
            hoverText="Discrete side pockets with clean finish"
            image="/images/img_frame_18.png"
            className="aspect-square"
            alt="Fashion Model"
          />

          <Card
            hoverText="Hand-cut and assembled in small batches"
            image="/images/img_frame_18_397x424.png"
            className="aspect-square"
            alt="Fashion Detail Close-up"
          />
          {/* <Card
            hoverText="Eclypse"
            image="/images/img_frame_19.png"
            className="aspect-square hidden md:block"
            alt="Fashion Detail Close-up"
          /> */}
          <div className="aspect-square hidden md:block cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src="/images/img_frame_19.png" alt="" />
            <div className={`absolute inset-0 flex items-center justify-center text-7xl bg-black-700 opacity-0 transition-opacity duration-500 pointer-events-none z-10 hover:opacity-30 ${isHovered ? 'opacity-100' : 'opacity-0 '}`} >
              <div>
                Eclypse<img
                  src="/images/img_group.svg"
                  alt="Registered Mark"
                  className="inline-block ml-2 h-6 w-6 align-top"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
