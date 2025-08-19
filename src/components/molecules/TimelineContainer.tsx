import React from 'react';

interface TimelineContainerProps {
  children: React.ReactNode;
  type?: 'education' | 'professional' | 'organization';
}

const typeColors = {
  education: 'bg-blue-500',
  professional: 'bg-primary-500',
  organization: 'bg-accent-500',
};

export const TimelineContainer: React.FC<TimelineContainerProps> = ({ 
  children, 
  type = 'education' 
}) => {
  const lineColor = typeColors[type];
  
  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Vertical timeline line - responsive positioning */}
      <div 
        className={`absolute md:left-1/2 md:transform md:-translate-x-1/2 left-4 transform -translate-x-1/2 top-0 bottom-0 w-0.5 ${lineColor}/30`}
      />
      
      {/* Timeline content */}
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};
