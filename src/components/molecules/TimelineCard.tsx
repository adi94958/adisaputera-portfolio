import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../atoms/Card';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';

export interface TimelineCardProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
  skills?: string[];
  achievements?: string[];
  type: 'education' | 'professional' | 'organization';
  index: number;
}

const typeConfig = {
  education: {
    dotColor: 'bg-blue-500 dark:bg-blue-400',
    lineColor: 'bg-blue-200 dark:bg-blue-700',
    borderColor: 'border-blue-200 dark:border-blue-700',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-500',
  },
  professional: {
    dotColor: 'bg-green-500 dark:bg-green-400',
    lineColor: 'bg-green-200 dark:bg-green-700',
    borderColor: 'border-green-200 dark:border-green-700',
    hoverBorder: 'hover:border-green-400 dark:hover:border-green-500',
  },
  organization: {
    dotColor: 'bg-purple-500 dark:bg-purple-400',
    lineColor: 'bg-purple-200 dark:bg-purple-700',
    borderColor: 'border-purple-200 dark:border-purple-700',
    hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-500',
  },
};

export const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  organization,
  period,
  description,
  skills = [],
  achievements = [],
  type,
  index,
}) => {
  const config = typeConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start space-x-4"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className={`w-3 h-3 rounded-full ${config.dotColor} shadow-lg z-10`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        />
        <div className={`w-0.5 h-full ${config.lineColor} mt-2`} />
      </div>

      {/* Card content */}
      <motion.div
        className="flex-1 pb-8"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Card className={`p-6 border-2 ${config.borderColor} ${config.hoverBorder} transition-all duration-300 hover:shadow-lg`}>
          <div className="space-y-3">
            {/* Header */}
            <div>
              <Text variant="subheading" className="font-bold text-gray-900 dark:text-white mb-1">
                {title}
              </Text>
              <Text variant="body" className="text-blue-600 dark:text-blue-400 font-medium">
                {organization}
              </Text>
              <Text variant="small" className="text-gray-500 dark:text-gray-400">
                {period}
              </Text>
            </div>

            {/* Description */}
            {description && (
              <Text variant="body" className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {description}
              </Text>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <Text variant="small" className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  Skills & Technologies:
                </Text>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <Badge variant="secondary" size="sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {achievements.length > 0 && (
              <div>
                <Text variant="small" className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  Key Achievements:
                </Text>
                <ul className="space-y-1">
                  {achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + achievementIndex * 0.05 }}
                      className="flex items-start space-x-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} mt-2 flex-shrink-0`} />
                      <Text variant="small" className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </Text>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
