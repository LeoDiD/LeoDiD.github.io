import React from 'react'
import AboutImage from '../assets/pogi.jpg'

const About = () => {
  return (
    <div className="bg-black text-white py-20" id='about'> 
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img src={AboutImage} alt="" 
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"/>
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building 
              modern and responsive web application.
            </p>
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML % CSS
                </label>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: '80%' }}
                  >
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <label htmlFor="javascript" className="w-2/12">
                  JavaScript
                </label>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: '10%' }}
                  >
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="react" className="w-2/12">
                  React
                </label>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                    transform transition-transform duration-300 hover:scale-105"
                    style={{ width: '10%' }}
                  >
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to blue-500"> 
                        1+
                    </h3>
                    <p>Years Studying</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to blue-500"> 
                        3
                    </h3>
                    <p>School Completed Projects</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to blue-500"> 
                        0
                    </h3>
                    <p>Client</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About