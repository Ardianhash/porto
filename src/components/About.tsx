import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2022 - Present",
      title: "Senior Fullstack Developer",
      organization: "TechNova Solutions",
      description: "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
      icon: <Briefcase size={20} />
    },
    {
      year: "2020 - 2022",
      title: "Blockchain Developer",
      organization: "Decentralized Systems",
      description: "Developed smart contracts and decentralized applications (dApps) using Solidity and Ethereum. Implemented secure wallet integration and NFT marketplace features.",
      icon: <Briefcase size={20} />
    },
    {
      year: "2018 - 2020",
      title: "Frontend Developer",
      organization: "Creative Digital Agency",
      description: "Created responsive and interactive user interfaces for various client projects. Specialized in React and modern CSS frameworks for optimal user experiences.",
      icon: <Briefcase size={20} />
    },
    {
      year: "2016 - 2018",
      title: "Master's in Computer Science",
      organization: "Tech University",
      description: "Specialized in Human-Computer Interaction and Advanced Web Technologies. Thesis on Decentralized Application Architecture.",
      icon: <GraduationCap size={20} />
    },
    {
      year: "2012 - 2016",
      title: "Bachelor's in Information Technology",
      organization: "National University",
      description: "Graduated with honors. Focused on Software Development and Database Systems.",
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate Fullstack Developer with expertise in building modern web applications, 
              blockchain solutions, and AI-powered experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With over 7 years of experience in software development, I've had the opportunity to work on a diverse 
                range of projects spanning from enterprise applications to innovative startups. My passion for technology 
                began during my early college years and has only grown stronger with each project.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm particularly interested in the intersection of cutting-edge technologies like blockchain and artificial 
                intelligence, and how they can be leveraged to create meaningful user experiences. I believe in writing clean, 
                maintainable code and building solutions that are not only functional but also delightful to use.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or 
                sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Happy Clients</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">15+</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Technologies</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Experience & Education
          </h3>
          
          <div className="relative border-l border-gray-300 dark:border-gray-600 pl-8 ml-4 md:ml-8 space-y-10">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-12 mt-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white">
                  {item.icon}
                </div>
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;