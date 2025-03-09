import React from 'react';
import img1 from '../MainPage/image 1.png'; // People image
import img2 from '../MainPage/Gradient.png'; // Background
import img3 from '../MainPage/Ellipse 3.png'; // Ellipse

const Mainf = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen items-center justify-center px-6 lg:px-20 relative min-w-[320px]">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center relative mb-10 lg:mb-0">
        <div className="relative w-48 sm:w-56 md:w-64 lg:w-72">
          {/* Background */}
          <img src={img2} alt="background" className="absolute inset-0 w-full h-auto -z-20" />
          {/* Ellipse */}
          <img src={img3} alt="ellipse" className="absolute inset-0 w-full h-auto -z-10" />
          {/* People (Scaled Down) */}
          <img src={img1} alt="people" className="relative w-3/4 h-auto mx-auto z-0" />
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4 min-w-[300px]">
        <span className="text-2xl sm:text-3xl font-semibold tracking-wide">
          A designer who
        </span>
        
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Judges a Book
        </p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          By its Cover...
        </p>
        <p className="text-md sm:text-lg font-medium italic mt-4">
          Because if the cover does not impress you, what else can?
        </p>
      </div>
    </div>
  );
};

export default Mainf;
