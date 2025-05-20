import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`${className} bg-[#090808] pb-5 text-[#d3d5d8]`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">

          <div className='flex flex-col  md:w-8/12'>


            <div className="flex  items-center mb-6 ">
              <h2 className="text-3xl font-medium">Eclypse</h2>
              <img src="/images/img_vector_blue_gray_100_02.svg" alt="Dot" className="ml-2 h-1.5 w-1.5" />
            </div>
            <div className="mb-8 md:mb-0 gap-4 flex flex-row md:w-1/2">
              <div className="flex flex-wrap gap-x-2 text-sm">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-[#d3d5d866]">/</span>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
                <span className="text-[#d3d5d866]">/</span>
                <Link to="/buy" className="hover:text-white transition-colors">Buy</Link>
                <span className="text-[#d3d5d866]">/</span>
                <Link to="/customers" className="hover:text-white transition-colors">Our Customers</Link>
                <span className="text-[#d3d5d866]">/</span>
                <Link to="/contacts" className="hover:text-white transition-colors">Contacts</Link>
              </div>


              <div className="mb-8 md:mb-0 w-1/2">
                <div className="mb-4">
                  <p className="uppercase text-xs tracking-wider text-[#d3d5d899] mb-1">Contact</p>
                  <p className="text-xl">+91 123-456-7890</p>
                </div>

                <div>
                  <p className="uppercase text-xs tracking-wider text-[#d3d5d899] mb-1">Email</p>
                  <a href="mailto:eclypse@gmail.com" className="text-sm hover:text-white transition-colors">
                    eclypse@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <button
              onClick={scrollToTop}
              className="mb-8 hover:opacity-80 transition-opacity"
            >
              <img src="/images/img_totop.svg" alt="To Top" className="h-10 w-10" />
            </button>

            <p className="text-xs text-[#d3d5d899]">© Eclypse 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;