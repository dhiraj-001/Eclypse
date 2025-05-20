import React, { useState } from 'react';
import { Testimonial } from '../../types/Home';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className = "" }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Understated, but unforgettable. It feels like it was made for me",
      author: "Random Woman",
      location: "NY, USA",
      avatar: "/images/img_ellipse_3.png"
    },
    {
      id: 2,
      quote: "The quality and attention to detail is exceptional. Worth every penny.",
      author: "Fashion Enthusiast",
      location: "London, UK",
      avatar: "/images/img_ellipse_4.png"
    },
    {
      id: 3,
      quote: "Elegant simplicity that stands out in a crowd. My new favorite piece.",
      author: "Style Connoisseur",
      location: "Paris, France",
      avatar: "/images/img_ellipse_5.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className={`py-16 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        <div className="py-12 pb-32 border-b border-gray-700">
          <h3 className="text-sm uppercase tracking-widest text-white text-opacity-80 mb-8">
            OUR CUSTOMERS
          </h3>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/12 text-[118px] text-white font-['Coolvetica'] leading-none">
              &ldquo;
            </div>

            <div className="md:w-9/12">
              <div className="relative">
                <p className="text-2xl md:text-5xl text-white font-normal leading-tight mb-8 max-w-sm md:max-w-3xl">
                  {testimonials[currentTestimonial].quote}
                </p>

                <div className="flex flex-col md:mt-28 gap-5">
                  <p className="text-xl text-white font-normal mb-1">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-lg text-gray-500 font-medium">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-2/12 flex justify-end mt-8 md:mt-0 relative">
              <button
                onClick={prevTestimonial}
                className="hover:opacity-80 transition-opacity absolute left-1 top-14"
              >
                <img src="/images/img_vector.svg" alt="Previous" className="h-6 w-6 " />
              </button>

              <div className="flex flex-col items-center space-y-6">
                {(() => {
                  const reordered = [
                    testimonials[currentTestimonial],
                    ...testimonials.filter((_, i) => i !== currentTestimonial),
                  ];
                  return reordered.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => setCurrentTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
                      className={` rounded-full overflow-hidden  transition-all duration-500,
          }} ${testimonial.id ===
                          testimonials[currentTestimonial].id ? ' w-[120px] h-[120px] ' : 'w-20 h-20'
                        }`}
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className=" object-cover "
                      />
                    </button>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
