import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProfessionalExperience } from "../../store/slices/professionalExperienceSlice";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import { ProfessionalExperienceCard, TimelineContainer, TimelineItem } from "../molecules";

export const ProfessionalExperienceSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: experiences,
    loading,
    error,
  } = useAppSelector((state) => state.professionalExperience);

  useEffect(() => {
    dispatch(fetchProfessionalExperience());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text as="h6" variant="heading" weight="bold" color="gradient">
              Professional Experience
            </Text>
            <Text variant="body" color="muted">
              Loading professional experience...
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
              Professional Experience
            </Text>
            <Text variant="body" color="muted">
              Error loading professional experience: {error}
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
            Professional Experience
          </Text>
          <Text variant="body" color="muted">
            My journey through various professional roles and responsibilities
          </Text>
        </motion.div>

        <TimelineContainer type="professional">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.experience_id}
              index={index}
              isLeft={index % 2 === 0}
              type="professional"
            >
              <ProfessionalExperienceCard experience={experience} />
            </TimelineItem>
          ))}
        </TimelineContainer>
      </div>
    </section>
  );
};
