import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Text, Button } from "../atoms";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  useScrollAnimation,
  staggerContainerVariants,
  slideInFromLeft,
  slideInFromRight,
} from "../../hooks";
import { goToDetailedView } from "../../store/slices/uiSlice";

export const AboutSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: profile } = useAppSelector((state) => state.profile);
  const { ref, isInView } = useScrollAnimation();

  const handleLearnMore = () => {
    dispatch(goToDetailedView());
    // Scroll to top untuk efek page baru
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-secondary-50/80 dark:bg-secondary-900/80 relative"
    >
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={slideInFromLeft}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-md mx-auto lg:mx-0">
              <img
                src={
                  profile?.image_about
                    ? `/images/${profile.image_about}`
                    : "/images/about-placeholder.jpg"
                }
                alt="About me"
                className="w-full h-auto rounded-2xl shadow-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://via.placeholder.com/500x600?text=About+Image";
                }}
              />

              {/* Floating elements */}
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
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"
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
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <motion.div variants={slideInFromRight}>
              <Text variant="heading" weight="bold" color="gradient">
                About Me
              </Text>
            </motion.div>

            <motion.div variants={slideInFromRight}>
              <Text
                align="justify"
                variant="body"
                color="secondary"
                className="leading-relaxed"
              >
                {profile?.self_description ||
                  "I'm a passionate developer with a love for creating beautiful and functional web experiences. My journey in technology has been driven by curiosity and a desire to solve complex problems through elegant code."}
              </Text>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              className="flex flex-row gap-3 sm:flex-col sm:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none"
              >
                <Button
                  variant="solid"
                  color="primary"
                  size="md"
                  onClick={handleLearnMore}
                  className="w-full sm:w-auto"
                >
                  Learn More
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon icon="mdi:chevron-right" width={20} height={20} />
                  </motion.div>
                </Button>
              </motion.div>
              {profile?.cv && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-none"
                >
                  <Button
                    variant="outline"
                    color="primary"
                    size="md"
                    onClick={() => {
                      // Download CV
                      const link = document.createElement("a");
                      link.href = `/files/${profile.cv}`;
                      link.download = profile.cv;
                      link.click();
                    }}
                    className="w-full sm:w-auto"
                  >
                    Download CV
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
