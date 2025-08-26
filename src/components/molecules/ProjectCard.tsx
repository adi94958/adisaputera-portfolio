import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Calendar, ArrowRight } from "lucide-react";
import type { Project } from "../../types";
import { Badge, Button, Text } from "../atoms";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  onViewDetails,
}) => {
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
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgba(59,130,246,0.12), 0 10px 10px -5px rgba(236,72,153,0.08)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        opacity: { duration: 0.3, delay: index * 0.1 },
        y: { duration: 0.3, delay: index * 0.1 },
      }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-lg flex flex-col"
    >
      {/* Decorative accent for project card */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-bl-full transform translate-x-4 -translate-y-4" />

      <div className="relative p-6 space-y-4">
        {/* Project Image - full width, 16:9 aspect ratio, small padding */}
        <div className="mb-4">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-md border-2 border-white dark:border-gray-600 flex items-center justify-center p-2">
            {project.image ? (
              <img
                src={`/images/${project.image}`}
                alt={project.project_name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class='w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold text-3xl rounded-xl'>${project.project_name.charAt(
                      0
                    )}</div>`;
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold text-3xl rounded-xl">
                {project.project_name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
            {project.project_name}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={14} />
            <span>{formatDateRange()}</span>
          </div>
        </div>

        {/* Description */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-pink-500 rounded-full opacity-40" />
          <p className="leading-relaxed pl-4 text-gray-700 dark:text-gray-300 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech_stack.slice(0, 3).map((tech, techIndex) => (
            <Badge key={techIndex} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
          {project.tech_stack.length > 3 && (
            <Badge variant="outline" size="sm">
              +{project.tech_stack.length - 3}
            </Badge>
          )}
        </div>

        {/* View Details Button */}
        <Button
          size="md"
          variant="outline"
          color="primary"
          onClick={() => onViewDetails?.(project)}
        >
          <Text variant="caption" weight="semibold">
            View Details
          </Text>
          <motion.div
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon icon="mdi:chevron-right" width={20} height={20} />
          </motion.div>
        </Button>
      </div>
    </motion.div>
  );
};
