import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchEducation } from "../../store/slices/educationSlice";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import { EducationCard, TimelineContainer, TimelineItem } from "../molecules";

export const EducationSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: educations,
    loading,
    error,
  } = useAppSelector((state) => state.education);

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text variant="heading" weight="bold" color="primary">
              Education
            </Text>
            <Text variant="body" color="muted">
              Loading education data...
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
              Education
            </Text>
            <Text variant="body" color="muted">
              Error loading education: {error}
            </Text>
          </div>
        </div>
      </section>
    );
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
            Education
          </Text>
          <Text variant="body" color="muted">
            My academic journey and educational background
          </Text>
        </motion.div>

        <TimelineContainer type="education">
          {educations.map((education, index) => (
            <TimelineItem
              key={education.education_id}
              index={index}
              isLeft={index % 2 === 0}
              type="education"
            >
              <EducationCard education={education} />
            </TimelineItem>
          ))}
        </TimelineContainer>
      </div>
    </section>
  );
};
