import React, { useState } from "react";
import { motion } from "framer-motion";
import { Text, Button } from "../atoms";
import { ProjectCard } from "../molecules";
import { useAppSelector } from "../../hooks/redux";
import {
  useScrollAnimation,
  staggerContainerVariants,
  fadeInUp,
} from "../../hooks";
import type { Project } from "../../types";

interface ProjectsSectionProps {
  onViewProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onViewProject,
}) => {
  const { data: projects } = useAppSelector((state) => state.projects);
  const [showAll, setShowAll] = useState(false);
  const { ref, isInView } = useScrollAnimation();

  const displayedProjects = showAll ? projects : projects?.slice(0, 6);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-secondary-50/80 dark:bg-secondary-900/80 relative"
    >
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <Text variant="heading" weight="bold" color="gradient">
              Featured Projects
            </Text>
            <Text variant="body" color="muted" className="max-w-2xl">
              A showcase of my recent work and creative projects
            </Text>
          </motion.div>

          {/* Projects Grid */}
          {displayedProjects && displayedProjects.length > 0 ? (
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.project_id}
                    project={project}
                    index={index}
                    onViewDetails={onViewProject}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div variants={fadeInUp} className="text-center py-12">
              <Text variant="body" color="muted">
                No projects available at the moment.
              </Text>
            </motion.div>
          )}

          {/* Show More Button */}
          {projects && projects.length > 6 && (
            <motion.div variants={fadeInUp} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll
                    ? "Show Less"
                    : `View All Projects (${projects.length})`}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
