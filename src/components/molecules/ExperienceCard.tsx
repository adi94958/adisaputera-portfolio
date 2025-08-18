import React from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Badge } from '../atoms';
import { formatDate, calculateDuration } from '../../utils';
import type { ProfessionalExperience } from '../../types';

interface ExperienceCardProps {
  experience: ProfessionalExperience;
  index?: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index = 0 }) => {
  const duration = calculateDuration(experience.start_date, experience.end_date);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
      
      {/* Timeline line */}
      {index !== 0 && (
        <div className="absolute left-1.5 top-0 w-0.5 h-6 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <Card className="ml-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <Text variant="subheading" weight="semibold">
                {experience.position}
              </Text>
              <Badge variant="primary" size="sm">
                {experience.employee_type}
              </Badge>
            </div>
            
            <Text variant="body" weight="medium" color="primary" className="mb-2">
              {experience.company_name}
            </Text>
            
            <Text variant="caption" color="muted" className="mb-3">
              {formatDate(experience.start_date)} - {formatDate(experience.end_date)} • {duration}
            </Text>
            
            <Text variant="body" color="secondary">
              {experience.description}
            </Text>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
