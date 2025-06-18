import React from 'react';
import kidImage from '../assets/kid.jpg'; // Replace with your image path

const LandingPage = () => {
  return (
    <div className="bg-[#1da2b4] text-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-12">
      
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <p className="text-lg font-semibold">Kids Learning Center</p>
        <h1 className="text-5xl font-bold leading-tight font-[cursive]">
          New Approach to Kids <br /> Education
        </h1>
        <p className="text-sm max-w-lg">
         At Kids Learning Center, we believe in nurturing young minds 
         through a joyful and engaging learning experience. Our innovative 
         approach combines creativity,fun, and education to help 
         children explore, grow, and succeed. From hands-on activities 
         to interactive lessons, we inspire curiosity and build a strong 
         foundation for lifelong learning.
        </p>
        <button className="bg-[#0e3e4e] hover:bg-[#0c2d3a] text-white px-6 py-3 rounded-full font-semibold transition w-fit">
          Learn More
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img 
          src={kidImage} 
          alt="Kid Learning" 
          className="w-[90%] max-w-md rounded-[150px] border-8 border-[#063b4a] shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LandingPage;
