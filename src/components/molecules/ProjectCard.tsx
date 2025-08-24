import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";
import { Card, Text } from "../atoms";
import type { Project } from "../../types";

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
    const [year, month] = dateString.split('-');
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full group"
    >
      <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl bg-white dark:bg-gray-900">
        {/* Project Image/Visual */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          {project.image ? (
            <img
              src={`/images/${project.image}`}
              alt={project.project_name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 p-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex items-center justify-center h-full w-full">
                      <div class="text-center p-6">
                        <div class="w-16 h-16 mx-auto mb-3 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                          <svg class="w-8 h-8 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                          </svg>
                        </div>
                        <div class="text-sm font-medium text-gray-600 dark:text-gray-400">${project.project_name}</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {project.project_name}
                </div>
              </div>
            </div>
          )}
          
          {/* Role Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              {project.role}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.url_demo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.url_demo!, "_blank");
                }}
                className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors border border-gray-200/50 dark:border-gray-700/50"
                title="Live Demo"
              >
                <ExternalLink size={14} className="text-gray-600 dark:text-gray-400" />
              </button>
            )}
            {project.url_repo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.url_repo!, "_blank");
                }}
                className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors border border-gray-200/50 dark:border-gray-700/50"
                title="Source Code"
              >
                <Github size={14} className="text-gray-600 dark:text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <Text variant="subheading" weight="semibold" className="mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {project.project_name}
            </Text>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <Calendar size={14} />
              <span>{formatDateRange()}</span>
            </div>

            <Text variant="body" color="muted" className="line-clamp-3 text-gray-600 dark:text-gray-400">
              {project.description}
            </Text>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech_stack.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
              {project.tech_stack.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                  +{project.tech_stack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* View Details Button */}
          <button
            onClick={() => onViewDetails?.(project)}
            className="w-full group/btn flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </Card>
    </motion.div>
  );
};
