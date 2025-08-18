import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCertifications } from "../../store/slices/certificationsSlice";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import { CertificationCard } from "../molecules";

export const CertificationsSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: certifications,
    loading,
    error,
  } = useAppSelector((state) => state.certifications);

  useEffect(() => {
    dispatch(fetchCertifications());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Text variant="heading" className="mb-8">
              Certifications
            </Text>
            <Text variant="body" color="muted">
              Loading certifications...
            </Text>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Text variant="heading" className="mb-8">
              Certifications
            </Text>
            <Text variant="body" color="muted">
              Error loading certifications: {error}
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
            Certifications
          </Text>
          <Text variant="body" color="muted">
            Professional certifications and credentials
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.certification_id}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
