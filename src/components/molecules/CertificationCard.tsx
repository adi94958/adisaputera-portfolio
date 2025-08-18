import React from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Badge, Button } from '../atoms';
import type { Certification } from '../../types';

interface CertificationCardProps {
  certification: Certification;
  index?: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ 
  certification, 
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📜</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <Text variant="subheading" weight="semibold" className="flex-1">
                {certification.title}
              </Text>
              <Badge variant="primary" size="sm">
                {new Date(certification.date).getFullYear()}
              </Badge>
            </div>
            
            <Text variant="body" color="primary" weight="medium" className="mb-3">
              {certification.issuer}
            </Text>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(certification.certificate_url, '_blank')}
            >
              View Certificate
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
