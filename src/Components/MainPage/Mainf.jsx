import React from 'react';
import img1 from '../MainPage/image 1.png';
import img2 from '../MainPage/Gradient.png';
import img3 from '../MainPage/Ellipse 3.png'

const Mainf = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center  pr-60">
       
      <div className="w-1/2 flex justify-center  pl-30">
        <img src={img1} alt="people" className="h-60  " />
        
        <img src={img2} alt="people"  className="absolute  left-10 bottom-30 w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] lg:w-[600px] lg:h-[600px] -z-10" />
        <img src={img3} alt="people"  className="absolute left-50 w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px] -z-10" />
      {/* Image Section */}
      </div>

      {/* Text Section */}
      <div className="w-1/2 flex flex-col  text-left">
        <span className="text-3xl  font-semibold tracking-wide">

          A designer who
        </span>
        
        <p className="text-6xl font-bold  leading-tight">
          Judges a Book
        </p>
        <p className="text-6xl font-bold  leading-tight">
          By its Cover...
        </p>
        <p className="text-lg font-medium italic">
          Because if the cover does not impress you, what else can?
        </p>
      </div>
    </div>
  );
};

export default Mainf;
