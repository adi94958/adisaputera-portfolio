import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Text, Button } from '../atoms';
import { ProjectCard } from '../molecules';
import { useAppSelector } from '../../hooks/redux';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  onViewProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewProject }) => {
  const { data: projects } = useAppSelector((state) => state.projects);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects?.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Text variant="heading" weight="bold" color="primary">
              Featured Projects
            </Text>
            <Text variant="body" color="muted" className="max-w-2xl mx-auto">
              A showcase of my recent work and creative projects
            </Text>
          </motion.div>

          {/* Projects Grid */}
          {displayedProjects && displayedProjects.length > 0 ? (
            <motion.div variants={itemVariants}>
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
            <motion.div variants={itemVariants} className="text-center py-12">
              <Text variant="body" color="muted">
                No projects available at the moment.
              </Text>
            </motion.div>
          )}

          {/* Show More Button */}
          {projects && projects.length > 6 && (
            <motion.div variants={itemVariants} className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
