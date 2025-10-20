'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-light/50 dark:bg-dark/50">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cinzel-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-white dark:border-dark shadow-xl max-w-md mx-auto">
              <Image
                src="/pfp.JPG"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 cinzel-semibold">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate web developer with a strong focus on creating beautiful and functional user experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I've worked on a variety of projects ranging from small business websites to complex web applications. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2 cinzel-medium">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">Tadashi Kumazawa</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 cinzel-medium">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">tadashi.opal.1022@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 cinzel-medium">Location:</h4>
                <p className="text-gray-700 dark:text-gray-300">San Francisco, USA</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 cinzel-medium">Availability:</h4>
                <p className="text-gray-700 dark:text-gray-300">Freelance / Full-time</p>
              </div>
            </div>
            
            {/* Resume download temporarily disabled */}
            <button 
              type="button"
              disabled
              className="btn btn-primary inline-flex items-center gap-2 cinzel-medium opacity-60 cursor-not-allowed"
              aria-disabled="true"
              title="Resume temporarily unavailable"
            >
              Download CV <FiDownload />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 