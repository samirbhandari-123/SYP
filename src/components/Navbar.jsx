import React from 'react';

const Navbar = () => {
  return (
     <div className="bg-white text-[#57b6c6] px-8 py-4 flex justify-between items-center shadow-md">  
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        Hamro Montesori
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold tracking-wide">
        <li className="hover:text-blue-900 cursor-pointer">Home</li>
        <li className="hover:text-blue-900 cursor-pointer">About</li>
        <li className="hover:text-blue-900 cursor-pointer">Classes</li>
        <li className="hover:text-blue-900 cursor-pointer">Teacher</li>
        <li className="hover:text-blue-900 cursor-pointer">Gallery</li>
        <li className="hover:text-blue-900 cursor-pointer">Pages</li>
        <li className="hover:text-blue-900 cursor-pointer">Contact</li>
      </ul>

      {/* CTA Button */}
      <div className="ml-4">
        <button className="bg-[#57b6c6] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-[#3c646b] transition duration-300">
          Join Class
        </button>
      </div>
    </div>
  );
};

export default Navbar;
