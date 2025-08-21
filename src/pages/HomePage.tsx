import React, { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from '../components/templates';
import { 
  HeroSection, 
  AboutSection, 
  ProjectsSection, 
  ContactSection,
  DetailedViewHeader
} from '../components/organisms';

// Lazy load heavy components untuk performa yang lebih baik
const SkillsSection = lazy(() => import('../components/organisms').then(module => ({ default: module.SkillsSection })));
const EducationSection = lazy(() => import('../components/organisms').then(module => ({ default: module.EducationSection })));
const CertificationsSection = lazy(() => import('../components/organisms').then(module => ({ default: module.CertificationsSection })));
const OrganizationExperienceSection = lazy(() => import('../components/organisms').then(module => ({ default: module.OrganizationExperienceSection })));
const WorkExperienceSection = lazy(() => import('../components/organisms').then(module => ({ default: module.WorkExperienceSection })));
const TestimonialsSection = lazy(() => import('../components/organisms').then(module => ({ default: module.TestimonialsSection })));

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
      // Kurangi loading time untuk performa yang lebih baik
      setTimeout(() => {
        setIsInitialLoading(false);
      }, 800); // Dikurangi dari 1500ms ke 800ms
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
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg"></div>}>
                    <TestimonialsSection />
                  </Suspense>
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
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mx-auto max-w-6xl"></div>}>
                    <SkillsSection />
                  </Suspense>
                </section>
                <section id="education">
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mx-auto max-w-6xl"></div>}>
                    <EducationSection />
                  </Suspense>
                </section>
                <section id="experience">
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mx-auto max-w-6xl"></div>}>
                    <WorkExperienceSection />
                  </Suspense>
                </section>
                <section id="organization">
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mx-auto max-w-6xl"></div>}>
                    <OrganizationExperienceSection />
                  </Suspense>
                </section>
                <section id="certifications">
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg mx-auto max-w-6xl"></div>}>
                    <CertificationsSection />
                  </Suspense>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MainLayout>
    </>
  );
};
