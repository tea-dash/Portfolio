'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
      
      <div className="section relative z-10 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cinzel-bold"
        >
          <span className="block">Hi, I'm <span className="text-primary">Tadashi Kumazawa</span></span>
          <span className="block mt-2">Creative Developer</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
        >
          I build beautiful, interactive, and high-performance web applications with modern technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="btn btn-primary flex items-center justify-center gap-2 cinzel-medium">
            View My Work <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline cinzel-medium">
            Contact Me
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6 mt-12"
        >
          <a href="https://github.com/tea-dash" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tadashi-kumazawa-0a368421b" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FiLinkedin size={24} />
          </a>
          <a href="https://x.com/tadashikumazawa" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            <FiTwitter size={24} />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-700 dark:border-gray-300 rounded-full flex justify-center">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 