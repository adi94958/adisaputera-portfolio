import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchOrganizationExperience } from "../../store/slices/organizationExperienceSlice";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import {
  OrganizationExperienceCard,
  TimelineContainer,
  TimelineItem,
} from "../molecules";

export const OrganizationExperienceSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: experiences,
    loading,
    error,
  } = useAppSelector((state) => state.organizationExperience);

  useEffect(() => {
    dispatch(fetchOrganizationExperience());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text variant="heading" weight="bold" color="primary">
              Organization Experience
            </Text>
            <Text variant="body" color="muted">
              Loading organization experience...
            </Text>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text variant="heading" weight="bold" color="primary">
              Organization Experience
            </Text>
            <Text variant="body" color="muted">
              Error loading organization experience: {error}
            </Text>
          </div>
        </div>
      </section>
    );
  }

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50/80 dark:bg-gray-900/80 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <Text variant="heading" weight="bold" color="gradient">
            Organization Experience
          </Text>
          <Text variant="body" color="muted">
            Leadership and organizational involvement throughout my career
          </Text>
        </motion.div>

        <TimelineContainer type="organization">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.organization_id}
              index={index}
              isLeft={index % 2 === 0}
              type="organization"
            >
              <OrganizationExperienceCard experience={experience} />
            </TimelineItem>
          ))}
        </TimelineContainer>
      </div>
    </section>
  );
};
