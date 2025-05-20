import React, { useState } from 'react';

import Accordion from '../../components/common/Accordion';
import { ProductSize } from '../../types/Home';
import { Link } from 'react-router-dom';

interface ProductSectionProps {
  className?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ className = "" }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes: ProductSize[] = [
    { label: 'XS', value: 'xs' },
    { label: 'S', value: 's' },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' },
    { label: 'XL', value: 'xl' },
  ];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }
    alert(`Added Silhouette No. 1 – Vermilion in size ${selectedSize.toUpperCase()} to cart`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }
    alert(`Proceeding to checkout with Silhouette No. 1 – Vermilion in size ${selectedSize.toUpperCase()}`);
  };

  return (
    <section className={`${className} !px-0 !mx-0`}>
      <div className="container !px-0">
        <h2 className="text-4xl md:text-5xl px-2 text-white font-normal mb-12">
          Silhouette No. 1 – Vermilion
        </h2>

        <div className="bg-[#f6f6f6] !px-0 mx-0 w-full  overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">

              <video
                autoPlay loop muted
                className="w-full md:h-[913px] h-[400px]  object-cover"

              >
                <source src="https://res.cloudinary.com/dcfrgqt75/video/upload/v1747730957/vcqbdqvqys7yvuac6dwe.mp4" /> // github doesnot support upload more than 50 mb
              </video>

            </div>

            <div className="lg:w-1/2 p-8 md:p-8">
              <p className="text-sm md:text-base text-black-700 font-medium mb-8">
                A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
              </p>

              <div className="flex flex-wrap gap-4 mx-auto mb-8 w-full">
                <img
                  src="/images/img_frame_12.png"
                  alt="Product View 2"
                  className="w-[30%]  object-cover rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src="/images/img_frame_11.png"
                  alt="Product View 1"
                  className="w-[30%] object-cover rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                />

                <img
                  src="/images/img_frame_13.png"
                  alt="Product View 3"
                  className="w-[30%] object-cover rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>

              <div className="border-t py-4 mb-8">
                <div className="flex items-baseline gap-6 mt-11 mb-2">
                  <h3 className="text-4xl font-medium text-[#111111] ">₹ 7,999</h3>
                  <p className="text-sm text-[#767676]">MRP incl. of all taxes</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xl text-[#767676] font-medium mb-7">Please select a size</p>
                  <button className="text-sm text-[#767676] underline pb-5">Size chart</button>
                </div>

                <div className="flex flex-nowrap gap-4 mt-4 pb-8 bottom-3 border-b border-[#d9d9d9]">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      className={`w-20 h-12 rounded flex items-center justify-center text-sm font-medium transition-colors ${selectedSize === size.value
                          ? 'bg-black-700 text-[#f6f6f6]'
                          : 'bg-[#d9d9d9] text-[#767676] hover:bg-gray-300'
                        }`}
                      onClick={() => handleSizeSelect(size.value)}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className=" pt-8 mt-20 w-full flex flex-col sm:flex-row gap-4">
                <Link 
                 to="/cart"
                  className=" text-black-700 w-full md:w-1/3 h-16 border-2 border-[#c2c2c2] rounded-lg flex items-center justify-center text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Add to Cart
                </Link>

                <button
                  onClick={handleBuyNow}
                  className=" h-16 bg-gray-900 w-full md:w-2/3 text-white rounded-lg flex items-center justify-center text-lg font-medium duration-300 hover:bg-[#e44343] transition-colors"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 space-y-16 px-6">
          <Accordion title="Size & Fit">
            <div className="text-lg">
              <p className="mb-4">This garment is designed with a relaxed silhouette that drapes elegantly on the body.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Relaxed fit through shoulders and body</li>
                <li>Model is 5'9" and wears size S</li>
                <li>Sleeve length: 24.5"</li>
                <li>Body length: 28"</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="Delivery & Returns">
            <div className="text-lg">
              <p className="mb-4">We offer the following shipping and return options:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Free standard shipping on all orders</li>
                <li>Express delivery available (2-3 business days)</li>
                <li>Free returns within 30 days</li>
                <li>For international orders, please allow 7-14 business days for delivery</li>
              </ul>
            </div>
          </Accordion>

          <Accordion title="How This Was Made">
            <div className="text-lg">
              <p className="mb-4">Our commitment to quality craftsmanship:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Crafted from premium structured wool (85% wool, 15% cashmere)</li>
                <li>Fully lined with 100% silk</li>
                <li>Hand-finished details and reinforced seams</li>
                <li>Made in our atelier with sustainable practices</li>
                <li>Low-impact dyes used for the vermilion color</li>
              </ul>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;