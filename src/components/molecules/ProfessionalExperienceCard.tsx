import React from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Badge } from '../atoms';
import { formatDate, calculateDuration } from '../../utils';
import type { ProfessionalExperience } from '../../types';

interface ProfessionalExperienceCardProps {
  experience: ProfessionalExperience;
  index?: number;
  isLeft?: boolean;
}

export const ProfessionalExperienceCard: React.FC<ProfessionalExperienceCardProps> = ({ 
  experience, 
  index = 0,
  isLeft = true
}) => {
  const duration = calculateDuration(experience.start_date, experience.end_date);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      } justify-start`}
    >
      {/* Timeline dot - center on desktop, left on mobile */}
      <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg"></div>
      
      {/* Content */}
      <div className={`md:w-5/12 w-full ${
        isLeft ? "md:pr-8 pl-12" : "md:pl-8 pl-12"
      }`}>
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <Text variant="subheading" weight="semibold">
                  {experience.position}
                </Text>
                <Badge variant="primary" size="sm" className="self-start sm:self-auto">
                  {experience.employee_type}
                </Badge>
              </div>
              
              <Text variant="body" weight="medium" color="primary">
                {experience.company_name}
              </Text>
              
              <Text variant="caption" color="muted">
                {formatDate(experience.start_date)} - {formatDate(experience.end_date)} • {duration}
              </Text>
            </div>
            
            <Text variant="body" color="secondary" className="leading-relaxed">
              {experience.description}
            </Text>
          </div>
        </Card>
        
        {/* Connector line from card to timeline dot */}
        <div className={`absolute top-8 ${
          isLeft ? "md:right-0 md:w-8 right-12 w-4" : "md:left-0 md:w-8 right-12 w-4"
        } h-0.5 bg-primary-500/30`}></div>
      </div>
    </motion.div>
  );
};
