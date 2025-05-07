import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaHome, FaDollarSign, FaMap, FaSwimmingPool, FaImages, FaMapMarkerAlt, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-72 bg-white shadow-xl border-l border-gray-200 fixed right-0 top-0 h-screen overflow-y-auto z-50">

      <div className="p-4">
        {/* Organize Site Visit Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="bg-red-600 text-white px-3 py-1 text-sm rounded">Organize Site Visit</span>
          <a 
            href="tel:+919606970803" 
            className="bg-red-600 text-white px-3 py-1 text-sm rounded font-semibold hover:bg-red-700 transition"
          >
            +91 9606970803
          </a>
        </div>

        {/* Request Call Back Button */}
        <button className="w-full bg-red-600 text-white py-2 font-semibold rounded mb-4 hover:bg-red-700 transition shadow-md">
          Request Call Back
        </button>

        {/* ENQUIRE NOW Form */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-3">
            <h3 className="text-lg font-semibold text-center">ENQUIRE NOW</h3>
            <a 
              href="https://wa.me/919606970803" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-2"
            >
              <img src="/what1.webp" alt="WhatsApp" className="w-6 h-6" />
            </a>
          </div>
          
          <form className="space-y-3">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
            <div className="flex border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-red-500">
              <span className="bg-gray-100 px-3 py-2 flex items-center">+91</span>
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                className="w-full px-2 py-2 focus:outline-none" 
              />
            </div>
            <p className="text-xs text-gray-600">
              I Consent to The Processing of Provided Data According To{' '}
              <a href="#" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a>,{' '}
              <a href="#" className="text-blue-600 underline hover:text-blue-800">Terms & Conditions</a>.
            </p>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-2 font-semibold rounded hover:bg-red-700 transition shadow-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* WhatsApp Image Section */}
        <div className="mt-4">
          <img
            src="/place1.webp"
            alt="Pickup Service"
            className="w-full h-auto object-contain rounded"
          />
        </div>
      </div>
    </aside>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex w-full items-start pr-0 lg:pr-72"> {/* Added right padding for desktop */}
      {/* Main Navbar - fixed height */}
      <nav className="bg-white p-4 text-red-800 flex justify-between items-center font-sans shadow-md flex-grow h-16 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-red-800 focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-4 items-center">
          <li><a href="#home" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaHome className="mr-1" /> Home</a></li>
          <li><a href="#price" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaDollarSign className="mr-1" /> Price</a></li>
          <li><a href="#siteplan" className="flex items-center text-red-800 font-semibold  hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaMap className="mr-1" />Layout</a></li>
          <li><a href="#amenities" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaSwimmingPool className="mr-1" /> Amenities</a></li>
          <li><a href="#gallery" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaImages className="mr-1" /> Gallery</a></li>
          <li><a href="#location" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaMapMarkerAlt className="mr-1" /> Location</a></li>
          <li><a href="#brochure" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-white hover:shadow-md px-3 py-1 rounded transition-all"><FaFileAlt className="mr-1" /> Brochure</a></li>
        </ul>
      </nav>

      {/* Sidebar - now fixed */}
      <Sidebar />

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-50">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#home" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaHome className="mr-2" /> Home</a></li>
            <li><a href="#price" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaDollarSign className="mr-2" /> Price</a></li>
            <li><a href="#siteplan" className="flex items-center text-red-800 font-semibold  hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaMap className="mr-2" /> Site Plan</a></li>
            <li><a href="#amenities" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaSwimmingPool className="mr-2" /> Amenities</a></li>
            <li><a href="#gallery" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaImages className="mr-2" /> Gallery</a></li>
            <li><a href="#location" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaMapMarkerAlt className="mr-2" /> Location</a></li>
            <li><a href="#brochure" className="flex items-center text-red-800 font-semibold hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded transition-all"><FaFileAlt className="mr-2" /> Brochure</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;