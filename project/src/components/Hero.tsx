import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 animate-fadeIn">
              Fauzan Ardian
              <span className="block text-2xl md:text-3xl lg:text-4xl text-blue-600 dark:text-blue-400 mt-2">
                Fullstack Developer
              </span>
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl animate-fadeIn animation-delay-150">
              I combine <span className="text-blue-600 dark:text-blue-400 font-semibold">elegant design</span>, 
              <span className="text-teal-600 dark:text-teal-400 font-semibold"> robust code</span>, and 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> cutting-edge innovation</span> to 
              create impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-fadeIn animation-delay-300">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Let's Connect
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-transparent border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white font-medium transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center space-x-4 animate-fadeIn animation-delay-450">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fadeIn">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Profile image with gradient overlay */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Fauzan Ardian" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating skill badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 animate-float">
                React
              </div>
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-teal-600 dark:text-teal-400 animate-float animation-delay-300">
                Node.js
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 animate-float animation-delay-150">
                UI/UX
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 animate-float animation-delay-450">
                Blockchain
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a 
            href="#skills" 
            className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-700 dark:text-gray-300 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-3xl animate-pulse animation-delay-300"></div>
    </section>
  );
};

export default Hero;