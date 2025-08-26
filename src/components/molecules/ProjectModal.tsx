import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Code2, Clock } from "lucide-react";
import type { Project } from "../../types";
import { Badge, Text } from "../atoms";
import { MODAL_LABELS } from "../../constants";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!project) return null;

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const formatDateRange = () => {
    const startDate = formatDate(project.date_start);
    const endDate = formatDate(project.date_end);
    return `${startDate} - ${endDate}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border-0 overflow-hidden"
            initial={{ opacity: 0, scale: 0.75, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full  text-gray-300 transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.4 }}
            >
              <X size={18} />
            </motion.button>

            {/* Header Hero */}
            <div className="relative h-40 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 overflow-hidden">
              {/* Animated Background Orbs */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 rounded-full"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Header Content */}
              <motion.div
                className="relative z-10 p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Text variant="subheading" weight="bold">
                    {project.project_name}
                  </Text>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-1 text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <Text variant="caption">{formatDateRange()}</Text>
                  </div>
                  <div>
                    <Badge size="sm" variant="backdrop">
                      {project.role}
                    </Badge>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Area */}
            <motion.div
              className="p-6 overflow-y-auto max-h-[calc(90vh-128px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Project Description */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Text
                  variant="subheading"
                  weight="semibold"
                  className="flex items-center gap-6 mb-2"
                >
                  <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
                  {MODAL_LABELS.OVERVIEW}
                </Text>
                <Text align="justify" variant="caption">
                  {project.description}
                </Text>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Text
                  className="flex items-center gap-2 mb-2"
                  weight="semibold"
                  variant="subheading"
                >
                  <Code2
                    size={24}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                  {MODAL_LABELS.TECH_STACK}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech, index) => (
                    <Badge key={index} size="sm" variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {project.url_demo && (
                  <motion.button
                    onClick={() => window.open(project.url_demo!, "_blank")}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-indigo-500/30"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </motion.button>
                )}
                {project.url_repo && (
                  <motion.button
                    onClick={() => window.open(project.url_repo!, "_blank")}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium text-sm border border-gray-200 dark:border-gray-700"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={14} />
                    Repository
                  </motion.button>
                )}
              </motion.div>

              {/* No Links Available */}
              {!project.url_demo && !project.url_repo && (
                <motion.div
                  className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                    <Clock size={14} />
                    <span className="font-medium text-sm">
                      {MODAL_LABELS.LINKS_UNAVAILABLE}
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ProjectModal };
