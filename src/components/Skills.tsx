import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Cpu, 
  Brain, 
  Eye, 
  BarChart3, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Server,
  Globe,
  Layers,
  Settings,
  Zap,
  Box,
  Monitor,
  FileCode,
  Palette,
  Activity
} from 'lucide-react';
import { skills } from '../data/portfolioData';

// Professional technology icons mapping using Lucide React icons
const techIcons: Record<string, JSX.Element> = {
  // ML/AI Technologies
  'Python': <Code2 className="w-full h-full text-blue-600" />,
  'TensorFlow': <Brain className="w-full h-full text-orange-500" />,
  'PyTorch': <Zap className="w-full h-full text-red-500" />,
  'Scikit-learn': <Activity className="w-full h-full text-orange-600" />,
  'OpenCV': <Eye className="w-full h-full text-green-600" />,
  'Keras': <Cpu className="w-full h-full text-red-600" />,
  'Pandas': <BarChart3 className="w-full h-full text-blue-700" />,
  'NumPy': <BarChart3 className="w-full h-full text-blue-500" />,
  'Matplotlib': <BarChart3 className="w-full h-full text-green-500" />,
  'Jupyter': <FileCode className="w-full h-full text-orange-500" />,
  
  // Full Stack Technologies
  'React': <Code2 className="w-full h-full text-blue-400" />,
  'JavaScript': <FileCode className="w-full h-full text-yellow-500" />,
  'TypeScript': <FileCode className="w-full h-full text-blue-600" />,
  'Node.js': <Server className="w-full h-full text-green-500" />,
  'GO': <Code2 className="w-full h-full text-blue-500" />,
  'HTML': <Globe className="w-full h-full text-orange-500" />,
  'CSS': <Palette className="w-full h-full text-blue-500" />,
  'React Native': <Smartphone className="w-full h-full text-blue-400" />,
  'Next.js': <Layers className="w-full h-full text-black dark:text-white" />,
  
  // Databases
  'MySQL': <Database className="w-full h-full text-blue-600" />,
  'MongoDB': <Database className="w-full h-full text-green-600" />,
  'Redis': <Database className="w-full h-full text-red-500" />,
  
  // Tools & Technologies
  'Git': <GitBranch className="w-full h-full text-orange-600" />,
  'Docker': <Box className="w-full h-full text-blue-500" />,
  'AWS': <Cloud className="w-full h-full text-orange-500" />,
  'VS Code': <Monitor className="w-full h-full text-blue-600" />,
  'Postman': <Globe className="w-full h-full text-orange-500" />,
  'Firebase': <Zap className="w-full h-full text-orange-500" />,
  'REST API': <Server className="w-full h-full text-purple-500" />,
  'Webpack': <Settings className="w-full h-full text-blue-500" />,
  'FAST API': <Server className="w-full h-full text-green-500" />
};

const allTechStack = [
  // ML/AI Stack
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 
  'Pandas', 'NumPy', 'Matplotlib', 'Jupyter',
  
  // Full Stack
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'GO', 'HTML', 'CSS', 
  'React Native', 'Next.js', 'Vue.js',
  
  // Databases
  'MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'SQLite',
  
  // Tools
  'Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Postman', 'Firebase', 
  'GraphQL', 'REST API', 'Webpack'
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [iconsRef, iconsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Technology Icons Section */}
        <motion.div
          ref={iconsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={iconsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technologies I Work With
          </h3>
          
          {/* Updated Grid Layout - 4-5 icons per row */}
          <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4 lg:gap-8 max-w-6xl mx-auto mb-12">
            {allTechStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                animate={iconsInView ? { opacity: 1 } : {}}
                transition={{ 
                  delay: index * 0.02,
                  duration: 0.3
                }}
                className="flex flex-col items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 shadow-md hover:shadow-lg transition-all duration-200 hover:border-2 hover:border-blue-400/30">
                  
                  {/* Professional Icon - Mobile Optimized */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    {techIcons[tech] || <Settings className="w-full h-full text-gray-500" />}
                  </div>
                </div>

                {/* Technology Name - Always visible, Mobile Optimized */}
                <div className="mt-1.5 sm:mt-2 text-center">
                  <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 leading-tight">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simplified Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Machine Learning', 'AI & Deep Learning', 'Full Stack Development', 'Computer Vision', 'Data Science'].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0 }}
                animate={iconsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}