import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchWorkExperience } from "../../store/slices/workExperienceSlice";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import { WorkExperienceCard, TimelineContainer, TimelineItem } from "../molecules";

export const WorkExperienceSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: experiences,
    loading,
    error,
  } = useAppSelector((state) => state.workExperience);

  useEffect(() => {
    dispatch(fetchWorkExperience());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text as="h6" variant="heading" weight="bold" color="gradient">
              Work Experience
            </Text>
            <Text variant="body" color="muted">
              Loading work experience...
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
              Work Experience
            </Text>
            <Text variant="body" color="muted">
              Error loading work experience: {error}
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
            Work Experience
          </Text>
          <Text variant="body" color="muted">
            My journey through various work roles and responsibilities
          </Text>
        </motion.div>

        <TimelineContainer type="work">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.experience_id}
              index={index}
              isLeft={index % 2 === 0}
              type="work"
            >
              <WorkExperienceCard experience={experience} />
            </TimelineItem>
          ))}
        </TimelineContainer>
      </div>
    </section>
  );
};
