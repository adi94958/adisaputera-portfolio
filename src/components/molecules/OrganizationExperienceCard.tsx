import React from "react";
import { motion } from "framer-motion";
import { Card, Text, Badge } from "../atoms";
import { formatDate, calculateDuration } from "../../utils";
import type { OrganizationExperience } from "../../types";

interface OrganizationExperienceCardProps {
  experience: OrganizationExperience;
  index?: number;
  isLeft?: boolean;
}

export const OrganizationExperienceCard: React.FC<
  OrganizationExperienceCardProps
> = ({ experience, index = 0, isLeft = true }) => {
  const duration = calculateDuration(experience.start_date, experience.end_date);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {/* Timeline dot - always in center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg"></div>
      
      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <Text variant="subheading" weight="semibold">
                  {experience.position}
                </Text>
                <Badge variant="secondary" size="sm">
                  {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                </Badge>
              </div>
              
              <Text variant="body" weight="medium" color="accent">
                {experience.organization_name}
              </Text>
              
              <Text variant="caption" color="muted">
                {formatDate(experience.start_date)} - {formatDate(experience.end_date)} • {duration}
              </Text>
            </div>
            
            {experience.description && (
              <Text variant="body" color="secondary" className="leading-relaxed">
                {experience.description}
              </Text>
            )}
            
            {experience.image && (
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <img
                  src={`/images/${experience.image}`}
                  alt={experience.organization_name}
                  className="w-12 h-12 rounded-lg object-cover shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <Text variant="caption" color="muted">
                  {experience.organization_name}
                </Text>
              </div>
            )}
          </div>
        </Card>
        
        {/* Connector line from card to center */}
        <div className={`absolute top-8 ${isLeft ? 'right-0 w-8' : 'left-0 w-8'} h-0.5 bg-accent-500/30`}></div>
      </div>
    </motion.div>
  );
};
