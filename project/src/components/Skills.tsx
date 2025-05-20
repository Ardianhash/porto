import React from 'react';
import { Code, Palette, Database, Share2, BrainCircuit, Globe } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
  color: string;
  darkColor: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "Frontend Development",
      icon: <Code size={28} />,
      description: "Creating intuitive and responsive user interfaces with modern frameworks and libraries.",
      technologies: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript"],
      color: "bg-blue-50 text-blue-600 border-blue-200",
      darkColor: "dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
    },
    {
      name: "Backend Development",
      icon: <Database size={28} />,
      description: "Building robust server-side applications and APIs that power seamless user experiences.",
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
      color: "bg-green-50 text-green-600 border-green-200",
      darkColor: "dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={28} />,
      description: "Crafting beautiful, user-centered designs with attention to detail and accessibility.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "User Testing"],
      color: "bg-purple-50 text-purple-600 border-purple-200",
      darkColor: "dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800"
    },
    {
      name: "Blockchain Development",
      icon: <Share2 size={28} />,
      description: "Developing decentralized applications and smart contracts for the next generation of the web.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts", "dApps"],
      color: "bg-amber-50 text-amber-600 border-amber-200",
      darkColor: "dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800"
    },
    {
      name: "Artificial Intelligence",
      icon: <BrainCircuit size={28} />,
      description: "Implementing intelligent solutions and data-driven features to enhance user experiences.",
      technologies: ["Machine Learning", "Natural Language Processing", "OpenAI", "TensorFlow", "Python"],
      color: "bg-teal-50 text-teal-600 border-teal-200",
      darkColor: "dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-800"
    },
    {
      name: "DevOps & Deployment",
      icon: <Globe size={28} />,
      description: "Setting up efficient development workflows and reliable deployment pipelines.",
      technologies: ["CI/CD", "Docker", "AWS", "Git", "GitHub Actions", "Vercel"],
      color: "bg-red-50 text-red-600 border-red-200",
      darkColor: "dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Expertise & Skills
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I specialize in a diverse range of technologies that empower me to build comprehensive digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border border-opacity-50 ${skill.color} ${skill.darkColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{skill.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;