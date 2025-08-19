import React from "react";
import { Card, Text, Badge } from "../atoms";
import { formatDate, calculateDuration } from "../../utils";
import type { OrganizationExperience } from "../../types";

interface OrganizationExperienceCardProps {
  experience: OrganizationExperience;
}

export const OrganizationExperienceCard: React.FC<
  OrganizationExperienceCardProps
> = ({ experience }) => {
  const duration = calculateDuration(
    experience.start_date,
    experience.end_date
  );

  return (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <Text variant="subheading" weight="semibold">
              {experience.position}
            </Text>
            <Badge variant="secondary" size="sm" className="self-start sm:self-auto">
              {formatDate(experience.start_date)} -{" "}
              {formatDate(experience.end_date)}
            </Badge>
          </div>

          <Text variant="body" weight="medium" color="accent">
            {experience.organization_name}
          </Text>

          <Text variant="caption" color="muted">
            {formatDate(experience.start_date)} -{" "}
            {formatDate(experience.end_date)} • {duration}
          </Text>
        </div>

        {experience.description && (
          <Text
            variant="body"
            color="secondary"
            className="leading-relaxed"
          >
            {experience.description}
          </Text>
        )}

        {experience.image && (
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <img
              src={`/images/${experience.image}`}
              alt={experience.organization_name}
              className="w-12 h-12 rounded-lg object-cover shadow-sm"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <Text variant="caption" color="muted">
              {experience.organization_name}
            </Text>
          </div>
        )}
      </div>
    </Card>
  );
};
