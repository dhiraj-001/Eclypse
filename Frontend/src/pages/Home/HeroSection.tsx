import React from 'react';

interface HomeHeroSectionProps {
  className?: string;
}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ className = "" }) => {
  return (
    <section className={`pt-24 ${className} `}>
      <div className="container mx-auto px-4 mt-14">
        <div className="flex flex-col lg:">
          <div className="w-full mb-8 lg:mb-0">
            <div className='w-full flex flex-row justify-between items-end'>
              <h1 className="text-6xl md:text-[107px] font-normal text-white leading-tight mb-4">
                Eclypse
                <img
                  src="/images/img_group.svg"
                  alt="Registered Mark"
                  className="inline-block ml-2 h-6 w-6 align-top"
                />
              </h1>

              <div className="flex items-center mb-6">
                <img
                  src="/images/img_group_white_a700.svg"
                  alt="Year Icon"
                  className="h-3 w-3 mr-1"
                />
                <span className="text-sm text-white font-medium">2025</span>
              </div>
            </div>
            <div className="lg:w-full relative h-[530px]">
              <video
                autoPlay loop muted
                
                className="w-full h-full object-cover rounded-md"
              >
                <source src='https://res.cloudinary.com/dcfrgqt75/video/upload/v1747738780/gfki53qqwfflqimswlql.mov'/>
              </video>
              <div className="absolute bottom-8 right-8 md:right-5">
                <p className="md:text-2xl md:text-[2rem] text-white font-normal">
                  A silhouette worth remembering
                </p>
              </div>
            </div>

            <div className="mt-40 mb-10">
              <p className="text-2xl md:text-5xl w-72 md:w-auto text-white font-normal leading-tight max-w-4xl ">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
              </p>

              <div className="mt-20 flex items-center ">
                <a
                  href="#learn-more"
                  className="group flex items-center border-b border-[#e3e3e390] md:w-1/4 h-12 hover:bg-white hover:text-black-700 transition-all duration-400 group-hover:justify-center"
                >
                  <span className="md:text-2xl text-[#e3e3e3] mr-1 pl-0 group-hover:mr-0 group-hover:text-black-700 transition-all duration-500 text-center w-full">
                    Learn more about Eclypse
                  </span>

                  <img
                    src="/images/img_arrowright.svg"
                    alt="Arrow Right"
                    className="group-hover:hidden transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;