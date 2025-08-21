import React from "react";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import { SECTION_TITLES, SECTION_DESCRIPTIONS } from "../../constants/content";

export const DetailedViewHeader: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text
            variant="display"
            weight="bold"
            color="gradient"
            className="mb-4"
          >
            {SECTION_TITLES.PROFESSIONAL_JOURNEY}
          </Text>
          <Text variant="subheading" color="muted" className="max-w-3xl">
            {SECTION_DESCRIPTIONS.PROFESSIONAL_JOURNEY}
          </Text>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-20 w-16 h-16 bg-accent-200 rounded-full opacity-30"
        />
      </div>
    </motion.section>
  );
};
