
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: '',
  });

  const [addNewAddress, setAddNewAddress] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setAddress({
      firstName: '',
      lastName: '',
      streetAddress: '',
      aptNumber: '',
      state: '',
      zip: '',
    });
  };

  const handleSave = () => {
    alert('Address saved!');
  };

  const orderSummary = {
    item: 'Silhouette No. 1 - Vermilion',
    itemPrice: 7899,
    shippingHandling: 200,
    beforeTax: 6599,
    taxCollected: 1400,
    orderTotal: 8199,
  };

  return (
    <div className="min-h-screen bg-white px-8  md:px-60 font-sans text-gray-900">
     
      <header className="flex items-center align-middle justify-between mb-24 pt-4">
       <img src="/images/img_frame_19.png" alt="" className='h-14 rounded-lg '/>

        <nav className="space-x-6 md:text-lg text-sm font-medium text-gray-700">
          <Link to="/about" className="hover:border-b-2 border-gray-500 transition-all duration-100">About Us</Link>
          <Link to="/waitlist" className="hover:border-b-2 border-gray-500">Waitlist</Link>
          <Link to="/cart" className="border-b-2 border-gray-500 font-semibold">Cart</Link>
        </nav>
      </header>
 <div className='flex flex-row gap-2 items-center align-middle mb-7'>
        <Link to="/">
         <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </Link>
         
          <div className="text-2xl font-bold cursor-pointer">Shipping address</div>
        </div>
      <main className="flex flex-col md:flex-row gap-8">
        {/* Shipping Address Section */}
        <section className="flex-grow md:flex-[3] border border-gray-300 rounded-lg p-6">


          <div className="flex items-center mb-6">
            <input
              type="radio"
              id="addNewAddress"
              name="addressOption"
              checked={addNewAddress}
              onChange={() => setAddNewAddress(true)}
              className="mr-3"
            />
            <label htmlFor="addNewAddress" className="font-semibold text-2xl  text-gray-900">
              Add New Address
            </label>
          </div>

          {addNewAddress && (
            <form className="space-y-5 mt-14">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={address.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={address.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={address.streetAddress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="aptNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Apt Number
                  </label>
                  <input
                    type="text"
                    id="aptNumber"
                    name="aptNumber"
                    value={address.aptNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={address.zip}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="flex space-x-4 w-full pt-11">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 border md:flex-[1] border-gray-300 rounded-md py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex-1 bg-black md:flex-[2] text-white rounded-md py-3 text-sm font-medium hover:bg-slate-700 transition-colors duration-300 bg-gray-900"
                >
                  Save This Address
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Order Summary Section */}
        <section className="flex-grow md:flex-[2] bg-gray-100 rounded-lg p-6">
          <p className="md:text-sm text-gray-500 mb-4">
            By placing your order, you agree to our company{' '}
            <a href="#" className="underline font-bold">
              Privacy policy
            </a >{' '}and {" "}
            <a href="" className='font-bold'>
              Conditions of use.
            </a>

          </p>

          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 md:text-md text-gray-700">
            <div className="flex justify-between">
              <span>Items - {orderSummary.item}</span>
              <span>{orderSummary.itemPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping and handling:</span>
              <span>{orderSummary.shippingHandling.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Before tax:</span>
              <span>{orderSummary.beforeTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax Collected:</span>
              <span>{orderSummary.taxCollected.toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-48 pt-4 flex justify-between font-semibold">
            <span>Order Total:</span>
            <span>{orderSummary.orderTotal.toLocaleString()}</span>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-slate-700 bg-gray-900">
            Place Order
          </button>
        </section>
      </main>
    </div>
  );
};

export default Cart;

