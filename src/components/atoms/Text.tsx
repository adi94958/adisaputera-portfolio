import React from 'react';
import { cn } from '../../utils';

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'display' | 'heading' | 'subheading' | 'body' | 'caption' | 'small';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'inherit';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  weight = 'normal',
  color = 'inherit',
  align = 'left',
  className,
  children,
  ...props
}) => {
  const variants = {
    display: 'text-4xl md:text-6xl lg:text-7xl leading-none',
    heading: 'text-2xl md:text-3xl lg:text-4xl leading-tight',
    subheading: 'text-lg md:text-xl lg:text-2xl leading-relaxed',
    body: 'text-base leading-relaxed',
    caption: 'text-sm leading-normal',
    small: 'text-xs leading-normal',
  };
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  const colors = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-700 dark:text-secondary-300',
    accent: 'text-accent-600',
    muted: 'text-secondary-500 dark:text-secondary-400',
    inherit: 'text-inherit',
  };
  
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <Component
      className={cn(
        variants[variant],
        weights[weight],
        colors[color],
        alignments[align],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
