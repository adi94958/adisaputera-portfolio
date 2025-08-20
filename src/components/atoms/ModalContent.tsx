import React from 'react';

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = '',
  padding = true,
}) => {
  return (
    <div className={`flex-1 overflow-hidden ${padding ? 'p-6' : ''} ${className}`}>
      {children}
    </div>
  );
};
