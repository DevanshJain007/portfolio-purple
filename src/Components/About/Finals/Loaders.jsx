import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loaders = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.innerText.split("");
    textRef.current.innerHTML = "";
    
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.opacity = 0;
      textRef.current.appendChild(span);
    });

    gsap.to(textRef.current.children, {
      opacity: 1,
      stagger: {
        amount: 1,
        from: "random",
      },
      duration: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-full michroma-regular text-3xl tracking-tight text-[#9E9E9E]">
      <h1 ref={textRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        WELCOME TO MY PORTFOLIO
      </h1>
    </div>
  );
};

export default Loaders;