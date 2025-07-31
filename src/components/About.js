import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiCode, FiHeart } from 'react-icons/fi';

const About = () => {
  const downloadResume = () => {
    // Create a sample resume content
    const resumeContent = `
Alishair - React Developer

Contact Information:
Email: ar925754@gmail.com
Phone: +92 3029316489
Location: Gajjumata, Lahore, Pakistan
GitHub: github.com/alishair653

Professional Summary:
Passionate React developer with expertise in modern web technologies. 
Dedicated to creating user-friendly and performant applications.

Skills:
- React.js & React Hooks
- JavaScript (ES6+)
- HTML5 & CSS3
- Git & GitHub
- Responsive Design
- UI/UX Principles

Experience:
React Developer (2022-Present)
- Developed responsive web applications
- Implemented modern React patterns
- Collaborated with design and backend teams

Education:
Bachelor's in Computer Science
University of Lahore

Projects:
- E-commerce Platform (React, Node.js)
- Task Management App (React, Firebase)
- Portfolio Website (React, Tailwind CSS)
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ali_Shair_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-100">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Professional Image */}
              <div className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden relative">
                <img
                  src="/images/alishair-profile.jpg.jfif"
                  alt="Alishair - React Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  style={{ imageRendering: 'high-quality' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Alishair</h3>
                  <p className="text-sm opacity-90">React Developer</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <FiCode className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <FiHeart className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold mb-4 gradient-text"
              >
                About Me
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4"
              >
                <FiMapPin className="w-5 h-5 text-primary-600" />
                <span>Gajjumata, Lahore, Pakistan</span>
              </motion.div>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I'm a passionate React developer with a love for creating beautiful and functional web applications. 
              With expertise in modern JavaScript frameworks and a keen eye for design, I transform ideas into 
              engaging digital experiences.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code and 
              staying up-to-date with the latest industry trends.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="bg-gray-50 dark:bg-dark-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">2+ Years</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-dark-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">15+ Completed</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-dark-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                <p className="text-gray-600 dark:text-gray-300">React, JavaScript, CSS</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-dark-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="btn-primary flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 