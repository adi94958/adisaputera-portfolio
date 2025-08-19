import React from "react";
import { Card, Text, Badge } from "../atoms";
import { formatDateYear, calculateDuration } from "../../utils";
import type { Education } from "../../types";

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const duration = calculateDuration(education.start_date, education.end_date);

  return (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="space-y-6">
        {/* Header with image and institution */}
        <div className="flex items-start gap-4">
          {education.image && (
            <div className="flex-shrink-0">
              <img
                src={`/images/${education.image}`}
                alt={education.institution_name}
                className="w-16 h-16 rounded-xl object-cover shadow-md border-2 border-white dark:border-gray-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <Text variant="subheading" weight="bold" className="mb-1">
              {education.institution_name}
            </Text>
            <Text
              variant="caption"
              color="muted"
              className="flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {education.location}
            </Text>
          </div>
        </div>

        {/* Degree and Level */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-1 sm:flex-1 sm:max-w-[60%]">
              <Text variant="body" weight="semibold" color="primary">
                {education.level}
              </Text>
              <Text variant="body" weight="medium">
                {education.major}
              </Text>
            </div>

            <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:flex-shrink-0 sm:min-w-[35%]">
              <Badge
                variant="secondary"
                size="sm"
                className="text-xs px-2 py-1"
              >
                {formatDateYear(education.start_date)} -{" "}
                {formatDateYear(education.end_date)}
              </Badge>
              {education.gpa && (
                <Badge variant="accent" size="sm" className="whitespace-nowrap">
                  GPA: {education.gpa}
                </Badge>
              )}
            </div>
          </div>

          <Text
            variant="caption"
            color="muted"
            className="flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Duration: {duration}
          </Text>
        </div>

        {/* Description */}
        {education.description && (
          <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
            <Text variant="body" color="secondary" className="leading-relaxed">
              {education.description}
            </Text>
          </div>
        )}
      </div>
    </Card>
  );
};
