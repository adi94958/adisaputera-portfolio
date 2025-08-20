import React, { useState } from "react";
import { motion } from "framer-motion";
import { Text, Badge, Button } from "../atoms";
import { CertificateModal } from "./CertificateModal";
import { formatDate, calculateDuration } from "../../utils";
import type { OrganizationExperience, OrganizationRole } from "../../types";

interface OrganizationExperienceCardProps {
  experience: OrganizationExperience;
}

interface RoleCardProps {
  role: OrganizationRole;
}

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const duration = calculateDuration(role.start_date, role.end_date);

  return (
    <>
      <div className="space-y-3 pb-4 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0 last:pb-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1">
            <Text
              variant="body"
              weight="bold"
              className="text-gray-900 dark:text-white mb-1"
            >
              {role.position}
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Duration: {duration}
            </Text>
          </div>

          <Badge variant="accent" size="sm">
            {formatDate(role.start_date)} - {formatDate(role.end_date)}
          </Badge>
        </div>

        {role.description && (
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-accent-500 rounded-full opacity-60" />
            <Text
              variant="body"
              color="secondary"
              align="justify"
              className="leading-relaxed pl-4 text-gray-700 dark:text-gray-300"
            >
              {role.description}
            </Text>
          </div>
        )}

        {/* Certificate Button */}
        {role.e_certificate && (
          <div className="flex justify-start pt-2">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                color="accent"
                size="sm"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                  </svg>
                  View Certificate
                </div>
              </Button>
            </motion.div>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {role.e_certificate && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          certificateUrl={role.e_certificate}
          title={role.position}
        />
      )}
    </>
  );
};

export const OrganizationExperienceCard: React.FC<
  OrganizationExperienceCardProps
> = ({ experience }) => {
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
      <div className="absolute top-0 right-0 w-16 h-16 bg-accent-500/10 rounded-bl-full transform translate-x-4 -translate-y-4" />

      <div className="relative p-6 space-y-4">
        {/* Organization Header */}
        <div className="pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-4 mb-3">
            {/* Organization Logo */}
            {experience.organization_logo &&
            experience.organization_logo.trim() !== "" ? (
              <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-700 shadow-md border-2 border-white dark:border-gray-600 flex items-center justify-center p-1 flex-shrink-0">
                <img
                  src={`/images/${experience.organization_logo}`}
                  alt={experience.organization_name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center text-white font-bold text-lg">${experience.organization_name.charAt(
                        0
                      )}</div>`;
                    }
                  }}
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-xl bg-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                {experience.organization_name.charAt(0)}
              </div>
            )}

            {/* Organization Info */}
            <div className="flex-1">
              <Text
                variant="subheading"
                weight="bold"
                className="text-gray-900 dark:text-white mb-1"
              >
                {experience.organization_name}
              </Text>
              <Text
                variant="caption"
                className="text-gray-600 dark:text-gray-400"
              >
                {experience.roles.length} period
                {experience.roles.length > 1 ? "s" : ""}
              </Text>
            </div>
          </div>

          {/* Department */}
          {experience.department && (
            <Text variant="body" className="text-gray-700 dark:text-gray-300">
              {experience.department}
            </Text>
          )}
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          {[...experience.roles].reverse().map((role, index) => (
            <RoleCard key={index} role={role} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
