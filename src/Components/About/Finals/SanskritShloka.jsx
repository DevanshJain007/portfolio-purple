import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SanskritShloka() {
  const shlokaRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    gsap.fromTo(
      shlokaRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div
        ref={shlokaRef}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl text-center border border-yellow-400"
      >
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">शीलं परं भूषणम्</h1>
        <p className="text-lg text-gray-300 italic">"Character is the highest virtue."</p>
      </div>
    </div>
  );
}