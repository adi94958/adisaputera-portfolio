import React from "react";

interface TimelineProps {
  type?: "education" | "professional" | "organization";
  showLine?: boolean;
  className?: string;
}

const typeColors = {
  education: "bg-blue-500",
  professional: "bg-primary-500",
  organization: "bg-accent-500",
};

const typeLineColors = {
  education: "bg-blue-500/30",
  professional: "bg-primary-500/30",
  organization: "bg-accent-500/30",
};

export const Timeline: React.FC<TimelineProps> = ({
  type = "education",
  showLine = true,
  className = "",
}) => {
  const dotColor = typeColors[type];
  const lineColor = typeLineColors[type];

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Timeline dot */}
      <div
        className={`w-4 h-4 ${dotColor} rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg flex-shrink-0`}
      />

      {/* Timeline vertical line */}
      {showLine && <div className={`w-0.5 ${lineColor} flex-grow mt-2`} />}
    </div>
  );
};
