import React from "react";
import { motion } from "framer-motion";
import { Card, Text, Badge } from "../atoms";
import { formatDate, calculateDuration } from "../../utils";
import type { Education } from "../../types";

interface EducationCardProps {
  education: Education;
  index?: number;
  isLeft?: boolean;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  index = 0,
  isLeft = true,
}) => {
  const duration = calculateDuration(education.start_date, education.end_date);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${
        isLeft ? "md:justify-start" : "md:justify-end"
      } justify-start`}
    >
      {/* Timeline dot - center on desktop, left on mobile */}
      <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-lg"></div>

      {/* Content */}
      <div
        className={`md:w-6/12 w-full ${
          isLeft ? "md:pr-8 pl-12" : "md:pl-8 pl-12"
        }`}
      >
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <Text variant="subheading" weight="semibold">
                  {education.degree}
                </Text>
                <Badge
                  variant="secondary"
                  size="sm"
                  className="self-start sm:self-auto"
                >
                  {formatDate(education.start_date)} -{" "}
                  {formatDate(education.end_date)}
                </Badge>
              </div>

              <Text variant="body" weight="medium" color="gradient">
                {education.institution_name}
              </Text>

              <Text variant="caption" color="muted">
                {formatDate(education.start_date)} -{" "}
                {formatDate(education.end_date)} • {duration}
              </Text>
            </div>

            {education.description && (
              <Text
                variant="body"
                color="secondary"
                className="leading-relaxed"
              >
                {education.description}
              </Text>
            )}

            {education.image && (
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <img
                  src={`/images/${education.image}`}
                  alt={education.institution_name}
                  className="w-12 h-12 rounded-lg object-cover shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <Text variant="caption" color="muted">
                  {education.institution_name}
                </Text>
              </div>
            )}
          </div>
        </Card>

        {/* Connector line from card to timeline dot */}
        <div
          className={`absolute top-8 ${
            isLeft
              ? "md:right-0 md:w-8 right-12 w-4"
              : "md:left-0 md:w-8 right-12 w-4"
          } h-0.5 bg-blue-500/30`}
        ></div>
      </div>
    </motion.div>
  );
};
