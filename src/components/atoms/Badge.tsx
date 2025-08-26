import React from "react";
import { cn } from "../../utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "error"
    | "backdrop"
    | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const variants = {
    primary:
      "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    secondary:
      "bg-secondary-100 text-secondary-800 dark:bg-secondary-700 dark:text-secondary-200",
    accent: "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-white",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    backdrop: "bg-white/20 backdrop-blur-sm",
    outline:
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-2.5 py-1.5 text-sm",
    lg: "px-3 py-2 text-base",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};
