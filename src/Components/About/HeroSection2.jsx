import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
// import Loader from './loader';
// import HeroSection3 from './HeroSection3';
import Preloaders from '../Preloader/Preloaders';

const HeroSection2 = () => {
  const yellowSection = useRef(null);
  const blackSection = useRef(null);
  const headings = useRef([]); 
  const para = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(yellowSection.current, {
      y: '-100%',
      duration: 0.5,
      delay: 3.5,
      ease: 'power2.inOut',
     filter: "blur(90px)", 
    });

   
    tl.fromTo(
      blackSection.current,
      { y: '100%' },
      { y: '0%', duration: 0.7, ease: 'power2.inOut', stagger: { amount: 0.1 } },
      '<'
    );

    tl.from(headings.current[0], {
      y: 60,
      opacity: 0,
      duration: 1.1,
      rotateX: 90,
      skewY: 10,
      filter: "blur(50px)", 
      ease: 'power3.out',
    });

   

    tl.from(headings.current[1], {
      y: 60,
      opacity: 0,
      duration: 1.2,
      rotateX: 0.0713,
      skewY: 10,
      filter: "blur(30px)", 
      ease: 'power3.out',
    }, '-=0.8'); 


    
    tl.from(para.current, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    });


  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Yellow Section (Loading Screen) */}
      <div
        ref={yellowSection}
        className="absolute top-0 left-0 w-full h-screen bg-[#121315] flex justify-center items-center"
      >
        <div>
          <Preloaders />
        </div>
      </div>

      {/* Black Section (Main Content) */}
      <div
        ref={blackSection}
        className="w-full h-screen bg-[#121315] flex flex-col justify-center items-center"
      >
        <span
          ref={(el) => (headings.current[0] = el)}
          className=' text-7xl font-bold tracking-tight text-[#e0eeee]'
        >
          ROAR IN THE  
        </span>
        <span
          ref={(el) => (headings.current[1] = el)}
          className=' text-7xl font-bold tracking-tight text-[#e0eeee]'
        >
          DIGITAL WILDNESS
        </span>

        <p ref={para} className="px-1 sm:px-0 mt-4 mb-8 sm:mb-4 tr__banner__fadeUp w-[390px] text-center text-white">
          <span className='text-[#e0eeee]'>WE ROAR WITH SUCCESS, DELIVERING THE</span>
          <span className='text-[#e0eeee]'> TRIONN THROUGH VERSATILE DESIGN, BRANDING, AND THE LATEST</span>
          <span className='text-[#e0eeee]'>TECH DEVELOPMENT TO COMPANIES.</span>
        </p>
        <div>

      {/* <HeroSection3/> */}
        </div>
      </div>


    </div>
  );
};

export default HeroSection2;