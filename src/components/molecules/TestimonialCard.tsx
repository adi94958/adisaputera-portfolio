import React from 'react';
import { motion } from 'framer-motion';
import { Card, Text } from '../atoms';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 relative">
        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-primary-200 text-3xl">
          "
        </div>
        
        <div className="pr-8">
          <Text variant="body" color="muted" className="mb-4 italic">
            "{testimonial.feedback}"
          </Text>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold text-primary-600">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            
            <div>
              <Text variant="body" weight="semibold">
                {testimonial.name}
              </Text>
              <Text variant="caption" color="muted">
                {testimonial.position}
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
