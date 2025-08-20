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
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text variant="heading" weight="bold" color="primary">
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
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <Text variant="heading" weight="bold" color="primary">
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
    <section className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-full blur-xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Text
              variant="heading"
              weight="bold"
              color="gradient"
              className="mb-4"
            >
              Professional Certifications
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text variant="body" color="muted" className="max-w-2xl">
              Industry-recognized certifications that validate my skills and
              expertise in software development and quality assurance
            </Text>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        {certifications.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.certification_id}
                certification={certification}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900/30 dark:to-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-accent-600 dark:text-accent-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
            <Text
              variant="subheading"
              weight="semibold"
              color="muted"
              className="mb-2"
            >
              No Certifications Available
            </Text>
            <Text variant="body" color="muted">
              Professional certifications will appear here once they are added
            </Text>
          </motion.div>
        )}

        {/* Statistics Footer */}
        {certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-6 px-6 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-center">
                <Text variant="subheading" weight="bold" color="primary">
                  {certifications.length}
                </Text>
                <Text variant="caption" color="muted">
                  Total Certifications
                </Text>
              </div>

              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />

              <div className="text-center">
                <Text variant="subheading" weight="bold" color="accent">
                  {
                    certifications.filter(
                      (cert) =>
                        !cert.expiry_date ||
                        new Date(cert.expiry_date) > new Date()
                    ).length
                  }
                </Text>
                <Text variant="caption" color="muted">
                  Active
                </Text>
              </div>

              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />

              <div className="text-center">
                <Text variant="subheading" weight="bold" color="secondary">
                  {new Set(certifications.map((cert) => cert.issuer)).size}
                </Text>
                <Text variant="caption" color="muted">
                  Issuers
                </Text>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
