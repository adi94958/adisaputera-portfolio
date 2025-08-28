import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Text, Button } from "../atoms";
import { useAppSelector } from "../../hooks/redux";
import { ANIMATION_CONFIG, BUTTON_LABELS } from "../../constants";

export const HeroSection: React.FC = () => {
  const { data: profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    // Ensure no horizontal overflow on initial load
    document.body.style.overflowX = "hidden";

    return () => {
      // Cleanup overflow style
      document.body.style.overflowX = "";
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: ANIMATION_CONFIG.DURATION.VERY_SLOW,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen md:h-screen-nav flex items-center justify-center section-padding pt-20 md:pt-16"
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <Text variant="subheading" weight="light" color="inherit">
                {profile?.name}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text variant="display" weight="bold" color="gradient">
                {profile?.role}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text variant="body" color="secondary" className="max-w-lg">
                {profile?.role_description}
              </Text>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="solid"
                  color="primary"
                  size="md"
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto flex items-center gap-2 group"
                >
                  {BUTTON_LABELS.VIEW_PROJECTS}
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon icon="mdi:chevron-right" width={20} height={20} />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  color="primary"
                  size="md"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto"
                >
                  {BUTTON_LABELS.GET_IN_TOUCH}
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              {/* Add social media icons here */}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto">
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
                    delay: 1,
                  },
                }}
                className="relative z-30"
              >
                <img
                  src={`/images/${profile?.image_hero}`}
                  alt={profile?.name}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Background decorations with delayed animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-200 dark:to-accent-200 rounded-2xl z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-200 dark:to-primary-200 rounded-2xl z-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
