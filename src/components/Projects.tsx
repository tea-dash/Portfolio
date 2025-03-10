'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Never Swipe Again™',
      description: 'A fully responsive landing page for a dating app auto-matching users based on their preferences.',
      image: '/images/dating.png',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS'],
      liveLink: 'https://neverswipeagain.vercel.app/'
    },
    {
      id: 2,
      title: 'Palocal',
      description: 'A local business directory and gift card platform.',
      image: '/images/Palocal.co.jpg',
      category: 'app',
      technologies: ['Html', 'Css', 'Javascript', 'Stripe', 'Firebase'],
      liveLink: 'https://palocal.co'
    },
    {
      id: 3,
      title: 'Construction Website',
      description: 'Local construction company website',
      image: '/images/Hiraoka.png',
      category: 'web',
      technologies: ['Framer Motion'],
      liveLink: 'https://hiraokaconstruction.com/'
    },
    {
      id: 4,
      title: 'Gen Z Japanese Translation',
      description: 'A website that translates standard Japanese to Gen Z Japanese as well as provides educational resources for learning Japanese.',
      image: '/images/Genzjp.png',
      category: 'app',
      technologies: ['JavaScript', 'Html', 'CSS', 'Anthorpic API'],
      liveLink: 'https://genzjp.com/'
    },
    {
      id: 5,
      title: '3D Solar System',
      description: 'A 3D solar system created using Three.js',
      image: '/images/3dWorld.png',
      category: 'app',
      technologies: ['Three.js'],
      liveLink: 'https://3d-world-psi.vercel.app/'
    },
    
  ];
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'App', value: 'app' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cinzel-bold">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating 
            intuitive and engaging user experiences.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 cinzel-medium ${
                activeFilter === filter.value
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-dark/80 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark'
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 cinzel-semibold">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 