import React from 'react';
import { Card, Text, Badge } from '../atoms';
import { formatDate, calculateDuration } from '../../utils';
import type { ProfessionalExperience } from '../../types';

interface ProfessionalExperienceCardProps {
  experience: ProfessionalExperience;
}

export const ProfessionalExperienceCard: React.FC<ProfessionalExperienceCardProps> = ({ 
  experience
}) => {
  const duration = calculateDuration(experience.start_date, experience.end_date);
  
  return (
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
  );
};
