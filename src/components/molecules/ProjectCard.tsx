import React from "react";
import { motion } from "framer-motion";
import { Card, Text, Button, Badge } from "../atoms";
import { BUTTON_LABELS, GENERAL_LABELS } from "../../constants/content";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
          {project.image ? (
            <img
              src={`/images/${project.image}`}
              alt={project.project_name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-primary-100 to-accent-100">
                      <div class="text-center p-4">
                        <div class="text-4xl mb-2">📱</div>
                        <div class="text-sm font-medium text-gray-600">${project.project_name}</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-sm font-medium text-gray-600">
                  {project.project_name}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <Text variant="subheading" weight="semibold" className="mb-2">
            {project.project_name}
          </Text>

          <Text variant="body" color="muted" className="mb-4 flex-1">
            {project.description}
          </Text>

          {/* Role Badge */}
          <div className="mb-3">
            <Badge variant="secondary" size="sm">
              {project.role}
            </Badge>
          </div>

          {/* Tech Stack */}
          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="mb-4">
              <Text variant="caption" color="muted" className="mb-2">
                {GENERAL_LABELS.TECH_STACK}:
              </Text>
              <div className="flex flex-wrap gap-1">
                {project.tech_stack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="primary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="solid"
              color="primary"
              size="sm"
              className="flex-1"
              onClick={() => onViewDetails?.(project)}
            >
              {BUTTON_LABELS.VIEW_DETAILS}
            </Button>
            <Button
              variant="outline"
              color="primary"
              size="sm"
              onClick={() => window.open(project.url, "_blank")}
            >
              {BUTTON_LABELS.LIVE_DEMO}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
