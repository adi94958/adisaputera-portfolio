import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { cn } from '../../utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  variant = 'ghost',
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl focus:ring-secondary-500',
    ghost: 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100/80 dark:hover:bg-secondary-800/80 backdrop-blur-sm border border-transparent hover:border-secondary-200 dark:hover:border-secondary-700 focus:ring-primary-500',
  };
  
  const sizes = {
    sm: 'p-2 min-w-[36px] h-9',
    md: 'p-2.5 min-w-[44px] h-11',
    lg: 'p-3 min-w-[52px] h-13',
  };
  
  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="inline-block"
    >
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Icon icon="mdi:loading" className="animate-spin" width={iconSizes[size]} height={iconSizes[size]} />
        ) : (
          <Icon icon={icon} width={iconSizes[size]} height={iconSizes[size]} />
        )}
      </button>
    </motion.div>
  );
};
