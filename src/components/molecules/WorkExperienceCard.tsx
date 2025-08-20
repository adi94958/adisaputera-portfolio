import React from "react";
import { motion } from "framer-motion";
import { Text, Badge } from "../atoms";
import { formatDate, calculateDuration } from "../../utils";
import type { WorkExperience } from "../../types";

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
}) => {
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
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-3">
                {/* Company logo or initial - ukuran diperbesar */}
                {experience.company_logo ? (
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-700 shadow-md border-2 border-white dark:border-gray-600 flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={`/images/${experience.company_logo}`}
                      alt={experience.company_name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">${experience.company_name.charAt(
                            0
                          )}</div>`;
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                    {experience.company_name.charAt(0)}
                  </div>
                )}

                {/* Company info di samping logo */}
                <div className="flex-1 min-w-0">
                  <Text
                    variant="body"
                    weight="bold"
                    className="text-gray-900 dark:text-white mb-1"
                  >
                    {experience.company_name}
                  </Text>
                  {experience.company_address && (
                    <Text
                      variant="caption"
                      className="text-gray-600 dark:text-gray-400 font-medium"
                    >
                      {experience.company_address}
                    </Text>
                  )}
                </div>
              </div>

              {/* Role di bawah */}
              <Text variant="subheading" weight="bold" color="gradient">
                {experience.position}
              </Text>

              <Text
                variant="caption"
                className="text-gray-600 dark:text-gray-400 font-medium"
              >
                {formatDate(experience.start_date)} -{" "}
                {formatDate(experience.end_date)} • {duration}
              </Text>
            </div>

            <Badge
              variant="secondary"
              size="sm"
              className="self-start sm:self-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
            >
              {experience.work_type}
            </Badge>
          </div>
        </div>

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

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="space-y-2">
            <Text
              variant="caption"
              weight="semibold"
              className="text-gray-700 dark:text-gray-300"
            >
              Technologies
            </Text>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  size="sm"
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
