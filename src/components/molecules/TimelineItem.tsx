import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  children: React.ReactNode;
  index?: number;
  isLeft?: boolean;
  type?: "education" | "work" | "organization";
}

const typeColors = {
  education: "bg-emerald-500",
  work: "bg-primary-500",
  organization: "bg-accent-500",
};

const typeLineColors = {
  education: "bg-emerald-500/30",
  work: "bg-primary-500/30",
  organization: "bg-accent-500/30",
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  index = 0,
  isLeft = true,
  type = "education",
}) => {
  const dotColor = typeColors[type];
  const lineColor = typeLineColors[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      } justify-start`}
    >
      {/* Timeline dot - precisely aligned with vertical line */}
      <motion.div
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`absolute md:left-1/2 md:transform md:-translate-x-1/2 left-4 transform -translate-x-1/2 top-6 w-8 h-8 ${dotColor} rounded-full border-4 border-white dark:border-gray-800 z-10`}
      >
        {/* Outer glow ring */}
        <div
          className={`w-8 h-8 ${dotColor} rounded-full opacity-20 blur-md absolute -inset-2`}
        />

        {/* Main dot with gradient */}
        <div
          className={`relative w-6 h-6 ${dotColor} rounded-full border-4 border-white dark:border-gray-800 shadow-xl`}
        >
          {/* Inner shine effect */}
          <div className="absolute inset-1 bg-white/30 rounded-full" />
          {/* Pulse animation */}
          <div
            className={`absolute -inset-2 ${dotColor} rounded-full opacity-30 animate-ping`}
          />
        </div>
      </motion.div>

      {/* Content container */}
      <div
        className={`md:w-5/12 w-full ${
          isLeft ? "md:pr-8 md:pl-0 pl-12" : "md:pl-8 pl-12"
        }`}
      >
        {children}

        {/* Connector line from card to timeline dot */}
        <div
          className={`absolute top-8 ${
            isLeft
              ? "md:right-0 md:w-8 right-10 w-6"
              : "md:left-0 md:w-8 right-10 w-6"
          } h-0.5 ${lineColor}`}
        />
      </div>
    </motion.div>
  );
};
