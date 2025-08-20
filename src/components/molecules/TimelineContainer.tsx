import React from "react";

interface TimelineContainerProps {
  children: React.ReactNode;
  type?: "education" | "work" | "organization";
}

const typeLineColors = {
  education: "bg-emerald-500/30",
  work: "bg-primary-500/30",
  organization: "bg-accent-500/30",
};

export const TimelineContainer: React.FC<TimelineContainerProps> = ({
  children,
  type = "education",
}) => {
  const lineColor = typeLineColors[type];

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Modern gradient vertical timeline line */}
      <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 left-4 transform -translate-x-1/2 top-0 bottom-0 w-1">
        <div className={`w-full h-full ${lineColor} rounded-full shadow-sm`} />
        {/* Subtle glow effect */}
        <div
          className={`absolute inset-0 w-full h-full ${lineColor} rounded-full blur-sm opacity-30`}
        />
      </div>

      {/* Timeline content */}
      <div className="space-y-12">{children}</div>
    </div>
  );
};
