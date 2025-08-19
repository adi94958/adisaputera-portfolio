import React from "react";
import { Card, Text, Badge } from "../atoms";
import { formatDate, calculateDuration } from "../../utils";
import type { Education } from "../../types";

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
}) => {
  const duration = calculateDuration(education.start_date, education.end_date);

  return (
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
  );
};
