import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Card, Text } from '../atoms';
import type { Ability } from '../../types';

interface SkillCardProps {
  ability: Ability;
  index?: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ ability, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="flex flex-col items-center text-center h-full">
        <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary-100 dark:bg-primary-900 rounded-full">
          <Icon 
            icon={ability.icon} 
            width={32} 
            height={32} 
            className="text-primary-600 dark:text-primary-400"
          />
        </div>
        <Text variant="caption" weight="medium" className="text-center">
          {ability.ability_name}
        </Text>
      </Card>
    </motion.div>
  );
};
