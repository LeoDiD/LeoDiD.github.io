import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <html className="scroll-smooth">
      <section className="h-screen bg-black py-16 flex justify-center items-center" id="home">
        <div className="text-center">
          <h1 className="text-white text-6xl md:text-8xl font-bold mb-4">
            Hello, I'm
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-yellow-600 transition transform hover:scale-105">
                Leovi Garcia.
            </span>
          </h1>
          <p className="text-transparent text-white text-4xl md:text-6xl mb-8">
            I'm a full-stack web developer.
          </p>
          <div className="flex justify-center">
            <a href="#about">
              <FaArrowDown size={36} className="text-white hover:text-purple-800" />
            </a>
          </div>
        </div>
      </section>
    </html>
  );
};

export default Hero;