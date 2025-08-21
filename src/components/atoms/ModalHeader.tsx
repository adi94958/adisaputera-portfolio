import React from 'react';
import { IconButton } from './IconButton';
import { Text } from './Text';
import { ARIA_LABELS } from '../../constants';

interface ModalHeaderProps {
  title?: string;
  onClose: () => void;
  className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  onClose,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {title && (
        <Text variant="subheading" weight="bold" className="text-gray-900 dark:text-white">
          {title}
        </Text>
      )}
      <IconButton
        icon="mdi:close"
        onClick={onClose}
        variant="ghost"
        size="sm"
        className="ml-auto"
        aria-label={ARIA_LABELS.CLOSE_MODAL}
      />
    </div>
  );
};
