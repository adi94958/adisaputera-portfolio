import React from "react";
import { motion } from "framer-motion";
import { Text, Badge } from "../atoms";
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
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-lg"
    >
      {/* Simple decorative accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full transform translate-x-4 -translate-y-4" />

      <div className="relative p-6 space-y-4">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {/* Organization initial or image */}
                {experience.image ? (
                  <img
                    src={`/images/${experience.image}`}
                    alt={experience.organization_name}
                    className="w-10 h-10 rounded-xl object-cover shadow-md border-2 border-white dark:border-gray-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {experience.organization_name.charAt(0)}
                  </div>
                )}
                <div>
                  <Text
                    variant="subheading"
                    weight="bold"
                    className="text-gray-900 dark:text-white"
                  >
                    {experience.position}
                  </Text>
                </div>
              </div>
            </div>

            <Badge
              variant="secondary"
              size="sm"
              className="self-start sm:self-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
            >
              {formatDate(experience.start_date)} -{" "}
              {formatDate(experience.end_date)}
            </Badge>
          </div>

          <div className="space-y-2">
            <Text
              variant="body"
              weight="semibold"
              className="text-gray-800 dark:text-gray-200"
            >
              {experience.organization_name}
            </Text>

            <Text
              variant="caption"
              className="text-gray-600 dark:text-gray-400 font-medium"
            >
              Duration: {duration}
            </Text>
          </div>
        </div>

        {experience.description && (
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-40" />
            <Text
              variant="body"
              color="secondary"
              align="justify"
              className="leading-relaxed pl-4 text-gray-700 dark:text-gray-300"
            >
              {experience.description}
            </Text>
          </div>
        )}
      </div>
    </motion.div>
  );
};
