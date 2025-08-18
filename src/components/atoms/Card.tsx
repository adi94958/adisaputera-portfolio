import React from "react";
import { cn } from "../../utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = "md",
  hover = true,
}) => {
  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-secondary-800 rounded-xl shadow-lg border border-secondary-200 dark:border-secondary-700",
        hover &&
          "hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
};
