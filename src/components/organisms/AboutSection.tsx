import React from "react";
import { motion } from "framer-motion";
import { Text, Button } from "../atoms";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { goToDetailedView } from "../../store/slices/uiSlice";

export const AboutSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: profile } = useAppSelector((state) => state.profile);

  const handleLearnMore = () => {
    dispatch(goToDetailedView());
    // Scroll to top untuk efek page baru
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="section-padding bg-secondary-50/80 dark:bg-secondary-900/80 relative"
    >
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
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
            <motion.div variants={itemVariants}>
              <Text variant="heading" weight="bold" color="primary">
                About Me
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text
                variant="body"
                color="secondary"
                className="leading-relaxed"
              >
                {profile?.self_description ||
                  "I'm a passionate developer with a love for creating beautiful and functional web experiences. My journey in technology has been driven by curiosity and a desire to solve complex problems through elegant code."}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Text variant="caption" color="muted" weight="medium">
                    Name
                  </Text>
                  <Text variant="body" weight="medium">
                    {profile?.name || "Muhammad Adi Saputera"}
                  </Text>
                </div>
                <div>
                  <Text variant="caption" color="muted" weight="medium">
                    Role
                  </Text>
                  <Text variant="body" weight="medium">
                    {profile?.role || "Full Stack Developer"}
                  </Text>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" onClick={handleLearnMore}>
                Learn More
              </Button>
              {profile?.cv && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    // Download CV
                    const link = document.createElement("a");
                    link.href = `/files/${profile.cv}`;
                    link.download = profile.cv;
                    link.click();
                  }}
                >
                  Download CV
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
