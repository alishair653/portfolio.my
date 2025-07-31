import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/alishair653',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <FiMail className="w-5 h-5" />,
      href: 'mailto:ali.shair@example.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-100 text-white">
      <div className="container-custom">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                                 <h3 className="text-2xl font-bold gradient-text">Alishair</h3>
                <p className="text-gray-400 dark:text-gray-300 mt-2">
                  React Developer passionate about creating beautiful and functional web applications.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg font-semibold"
              >
                Quick Links
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                {['About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg font-semibold"
              >
                Contact Info
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2 text-gray-400 dark:text-gray-300"
              >
                <p>ar925754@gmail.com</p>
                <p>+92 3029316489</p>
                <p>Gajjumata, Lahore, Pakistan</p>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 dark:border-dark-300 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-gray-400 dark:text-gray-300"
            >
              <span>© {currentYear} Ali Shair. All rights reserved.</span>
              <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-gray-800 dark:bg-dark-200 text-gray-400 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer; 