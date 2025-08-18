import React from 'react';
import { motion } from 'framer-motion';
import { Text, Button } from '../atoms';
import { useAppSelector } from '../../hooks/redux';

export const HeroSection: React.FC = () => {
  const { data: profile } = useAppSelector((state) => state.profile);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <Text variant="display" weight="bold" className="gradient-text">
                {profile?.name || 'Muhammad Adi Saputera'}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text variant="subheading" weight="medium" color="primary">
                {profile?.role || 'Full Stack Developer'}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text variant="body" color="secondary" className="max-w-lg">
                {profile?.role_description || 
                  'A passionate developer creating beautiful and functional web experiences with modern technologies.'
                }
              </Text>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              {/* Add social media icons here */}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 },
                  scale: { duration: 0.6, delay: 0.4 },
                  y: { 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
                className="relative z-30"
              >
                <img
                  src={profile?.image_home ? `/images/${profile.image_home}` : '/images/hero-placeholder.jpg'}
                  alt={profile?.name || 'Hero Image'}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x500?text=Hero+Image';
                  }}
                />
              </motion.div>
              
              {/* Background decorations with delayed animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl z-10"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-accent-200 to-primary-200 rounded-2xl z-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
