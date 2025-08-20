import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  color?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  size = "md",
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none group";

  // Color definitions for each color theme
  const colorStyles = {
    primary: {
      solid:
        "bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg border border-transparent",
      outline:
        "border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white bg-transparent hover:shadow-md hover:shadow-primary-600/20 backdrop-blur-sm",
      ghost:
        "text-primary-600 dark:text-primary-400 bg-transparent border-none",
    },
    secondary: {
      solid:
        "bg-secondary-600 hover:bg-secondary-700 text-white shadow-md hover:shadow-lg border border-transparent",
      outline:
        "border-2 border-secondary-500 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-500 hover:text-white bg-transparent hover:shadow-md hover:shadow-secondary-500/20 backdrop-blur-sm",
      ghost:
        "text-secondary-600 dark:text-secondary-400 bg-transparent border-none",
    },
    accent: {
      solid:
        "bg-accent-600 hover:bg-accent-700 text-white shadow-md hover:shadow-lg border border-transparent",
      outline:
        "border-2 border-accent-500 text-accent-600 dark:text-accent-400 hover:bg-accent-500 hover:text-white bg-transparent hover:shadow-md hover:shadow-accent-500/20 backdrop-blur-sm",
      ghost:
        "text-accent-600 dark:text-accent-400 bg-transparent border-none",
    },
  };

  // Map variant to style type
  const getButtonStyle = () => {
    switch (variant) {
      case "solid":
        return colorStyles[color].solid;
      case "outline":
        return colorStyles[color].outline;
      case "ghost":
        return colorStyles[color].ghost;
      default:
        return colorStyles[color].solid;
    }
  };

  const sizes = {
    sm: "px-3 py-2 text-sm min-h-[36px]",
    md: "px-5 py-2.5 text-base min-h-[40px]",
    lg: "px-6 py-3 text-base min-h-[44px]",
  };

  return (
    <motion.div
      whileHover={
        !disabled && !isLoading
          ? {
              scale: 1.02,
              transition: { duration: 0.3 },
            }
          : {}
      }
      whileTap={
        !disabled && !isLoading
          ? { scale: 0.98 }
          : {}
      }
      className="inline-block"
    >
      <button
        className={cn(baseStyles, getButtonStyle(), sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </div>
        ) : (
          children
        )}
      </button>
    </motion.div>
  );
};
