import { useEffect } from "react";
import gsap from "gsap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-name",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero-quote",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".social-links a",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, delay: 1, stagger: 0.2, ease: "power2.out" }
    );
    gsap.fromTo(
      ".nav-links a",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative h-[100vh] w-[100vw] bg-[#000] text-white font-sans overflow-hidden flex items-center justify-center">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between p-6 text-lg font-bold backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="text-xl uppercase tracking-widest">Devansh Jain</div>
        <div className="flex gap-6 nav-links">
          <a href="#" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Projects</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Contact</a>
        </div>
      </nav>

      {/* Sidebar Social Links */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-2xl social-links">
        <a href="#" className="hover:text-gray-400 transition duration-300"><FaLinkedin /></a>
        <a href="#" className="hover:text-gray-400 transition duration-300"><FaGithub /></a>
        <a href="#" className="hover:text-gray-400 transition duration-300"><FaTwitter /></a>
      </div>

      {/* Center Content */}
      <div className="text-center p-6   tracking-tight micromo-regular text-white">
        <h1 className="text-9xl michroma-regular tracking-tight hero-name">
          Devansh Jain
        </h1>
        
        <p className="mt-6 text-5xl font-light hero-quote">
          "A <span className='text-white font-semibold'>Designer</span> Who Judges A Book by its Cover... <br/> Because if the Cover Does Not Impress You, What Else Can?"
        </p>
      </div>
    </div>
  );
}
