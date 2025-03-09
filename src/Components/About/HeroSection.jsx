import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const HeroSection = () => {
  const yellowSection = useRef(null)
  const blackSection = useRef(null)
  const heading1 = useRef(null)
  const letters = useRef([])

  useGSAP(() => {
    const tl = gsap.timeline()

    // Yellow section moves up
    tl.to(yellowSection.current, {
      y: '-100%',
      duration: 5,
      delay:3,
      ease: 'power2.inOut',
    })

    // Black section moves into view at the same time
    tl.fromTo(
      blackSection.current,
      { y: '100%' }, // Start off-screen
      { y: '0%', duration: 1.5, ease: 'power2.inOut' },
      '<' // Runs at the same time as yellow section moving up
    )

    // Text animations inside the black section
    tl.from(heading1.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    letters.current.forEach((el, index) => {
      tl.from(
        el,
        {
          y: 200,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1, // Slight stagger
          ease: 'power3.out',
        },
        '<' // Run animations in sync
      )
    })
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Yellow Background Section */}
      <div
        ref={yellowSection}
        className="absolute top-0 left-0 w-full h-screen bg-[#f3c77c] flex justify-center items-center"
      >
        <div>
          <h1>Loading</h1>
          <h1>0%</h1>
        </div>
      </div>

      {/* Black Background Section (initially off-screen) */}
      <div
        ref={blackSection}
        className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
      >
        <h1 ref={heading1} className="text-white text-4xl">Hello</h1>
        <div className="flex">
          {['h', 'e', 'l', 'l', 'o'].map((char, index) => (
            <span
              key={index}
              ref={(el) => (letters.current[index] = el)}
              className="text-[#f3c77c] text-center text-[40vw] font-bold"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection