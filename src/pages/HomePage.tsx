import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from '../components/templates';
import { 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ContactSection,
  EducationSection,
  CertificationsSection,
  OrganizationExperienceSection,
  WorkExperienceSection,
  TestimonialsSection,
  DetailedViewHeader
} from '../components/organisms';
import { BUTTON_LABELS } from '../constants';
import { ERROR_MESSAGES } from '../constants/ui';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProfile } from '../store/slices/profileSlice';
import { fetchAbilities } from '../store/slices/abilitiesSlice';
import { fetchProjects } from '../store/slices/projectsSlice';
import { fetchContact } from '../store/slices/contactSlice';
import { fetchOrganizationExperience } from '../store/slices/organizationExperienceSlice';
import { fetchWorkExperience } from '../store/slices/workExperienceSlice';
import { initializeTheme } from '../store/slices/themeSlice';
import type { Project } from '../types';

// Loading Component
const LoadingScreen: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-white dark:bg-secondary-900 flex items-center justify-center z-50"
  >
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg"
    />
  </motion.div>
);

// Error Component
const ErrorDisplay: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-4">{ERROR_MESSAGES.TITLE}</h2>
      <p className="text-secondary-600 mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        {BUTTON_LABELS.TRY_AGAIN}
      </button>
    </div>
  </div>
);

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: profile, loading: profileLoading, error: profileError } = useAppSelector((state) => state.profile);
  const { loading: projectsLoading, error: projectsError } = useAppSelector((state) => state.projects);
  const { loading: contactLoading, error: contactError } = useAppSelector((state) => state.contact);
  const { viewMode } = useAppSelector((state) => state.ui);
  
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Handle project view (for future project detail page)
  const handleViewProject = (_project: Project) => {
    // TODO: Navigate to project detail page
  };

  const loadData = React.useCallback(async () => {
    try {
      await Promise.all([
        dispatch(fetchProfile()),
        dispatch(fetchProjects()),
        dispatch(fetchContact()),
      ]);
    } catch {
      // Handle error silently
    } finally {
      // Minimum loading time for better UX
      setTimeout(() => {
        setIsInitialLoading(false);
      }, 1500);
    }
  }, [dispatch]);

  const loadDetailedData = React.useCallback(async () => {
    try {
      await Promise.all([
        dispatch(fetchAbilities()),
        dispatch(fetchOrganizationExperience()),
        dispatch(fetchWorkExperience()),
      ]);
    } catch {
      // Handle error silently
    }
  }, [dispatch]);

  useEffect(() => {
    // Initialize theme
    dispatch(initializeTheme());
    // Load initial data
    loadData();
  }, [dispatch, loadData]);

  // Load detailed data when viewMode becomes 'detailed'
  useEffect(() => {
    if (viewMode === 'detailed') {
      loadDetailedData();
    }
  }, [viewMode, loadDetailedData]);

  const isLoading = isInitialLoading || profileLoading || projectsLoading || contactLoading;
  const hasError = profileError || projectsError || contactError;

  if (hasError) {
    return (
      <MainLayout brandName={profile?.brand_name}>
        <ErrorDisplay 
          message={profileError || projectsError || contactError || ERROR_MESSAGES.PORTFOLIO_LOAD_FAILED} 
          onRetry={loadData}
        />
      </MainLayout>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <MainLayout brandName={profile?.brand_name}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {viewMode === 'home' ? (
              // Home View - Original sections
              <motion.div
                key="home-view"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <section id="home">
                  <HeroSection />
                </section>
                <section id="about">
                  <AboutSection />
                </section>
                <section id="projects">
                  <ProjectsSection onViewProject={handleViewProject} />
                </section>
                <section id="testimonials">
                  <TestimonialsSection />
                </section>
                <section id="contact">
                  <ContactSection />
                </section>
              </motion.div>
            ) : (
              // Detailed View - Skills, Education, Professional Experience, Organization, Certifications
              <motion.div
                key="detailed-view"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="min-h-screen-nav"
              >
                <DetailedViewHeader />
                <section id="skills">
                  <SkillsSection />
                </section>
                <section id="education">
                  <EducationSection />
                </section>
                <section id="experience">
                  <WorkExperienceSection />
                </section>
                <section id="organization">
                  <OrganizationExperienceSection />
                </section>
                <section id="certifications">
                  <CertificationsSection />
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MainLayout>
    </>
  );
};
