import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiSmartphone, 
  FiTool,
  FiZap
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FiCode className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 88, color: "from-blue-600 to-indigo-600" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "TypeScript", level: 75, color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      category: "Backend & Database",
      icon: <FiDatabase className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 75, color: "from-gray-600 to-gray-700" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", level: 65, color: "from-blue-500 to-blue-600" },
        { name: "Firebase", level: 80, color: "from-orange-500 to-yellow-500" }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <FiTool className="w-8 h-8" />,
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-700 to-gray-800" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-purple-500" },
        { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
        { name: "Docker", level: 60, color: "from-blue-600 to-cyan-600" },
        { name: "Webpack", level: 65, color: "from-blue-500 to-indigo-500" }
      ]
    },
    {
      category: "Mobile & Other",
      icon: <FiSmartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 75, color: "from-blue-500 to-cyan-500" },
        { name: "Expo", level: 70, color: "from-gray-600 to-gray-700" },
        { name: "Redux", level: 80, color: "from-purple-500 to-pink-500" },
        { name: "Framer Motion", level: 85, color: "from-purple-600 to-purple-700" },
        { name: "Next.js", level: 75, color: "from-gray-800 to-black" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools. Here's a comprehensive overview 
            of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2 overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Additional Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "REST APIs", "GraphQL", "JWT", "OAuth", "WebSockets", "PWA",
              "SEO", "Performance", "Testing", "CI/CD", "AWS", "Vercel",
              "Netlify", "Heroku", "Jest", "Cypress", "Storybook", "Lighthouse"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-dark-300 p-3 rounded-lg text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FiZap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Currently Learning
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Always expanding my knowledge and staying up-to-date with the latest technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Three.js", "WebGL", "Machine Learning", "Blockchain", "Rust", "Go"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-dark-200 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 