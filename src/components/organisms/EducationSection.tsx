import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchEducation } from '../../store/slices/educationSlice';
import { motion } from 'framer-motion';
import { Text } from '../atoms';
import { EducationCard } from '../molecules';

export const EducationSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: educations, loading, error } = useAppSelector(state => state.education);

  useEffect(() => {
    dispatch(fetchEducation());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text variant="heading" weight="bold" color="primary">Education</Text>
            <Text variant="body" color="muted">Loading education data...</Text>
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
            <Text variant="heading" weight="bold" color="primary">Education</Text>
            <Text variant="body" color="muted">Error loading education: {error}</Text>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Text variant="heading" weight="bold" color="primary">
            Education
          </Text>
          <Text variant="body" color="muted" className="max-w-2xl mx-auto">
            My academic journey and educational background
          </Text>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {educations.map((education, index) => (
              <EducationCard
                key={education.education_id}
                education={education}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
