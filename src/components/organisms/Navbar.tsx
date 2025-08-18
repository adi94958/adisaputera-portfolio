import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Text, BackButton } from '../atoms';
import { NavigationMenu, ThemeToggle } from '../molecules';
import { useAppSelector } from '../../store/hooks';

interface NavbarProps {
  brandName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ brandName = 'Portfolio' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { viewMode } = useAppSelector((state) => state.ui);

  const homeNavigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const detailedNavigationItems = [
    { label: 'Skills & Expertise', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Professional Experience', href: '#experience' },
    { label: 'Organization Experience', href: '#organization' },
    { label: 'Certifications', href: '#certifications' },
  ];

  const navigationItems = viewMode === 'detailed' 
    ? detailedNavigationItems 
    : homeNavigationItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'navbar-blur shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <div className="flex items-center gap-4">
            {viewMode === 'detailed' && <BackButton />}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text as="h1" variant="subheading" weight="bold" color="primary">
                {brandName}
              </Text>
            </motion.div>
          </div>

          {/* Navigation */}
          <NavigationMenu
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
            items={navigationItems}
          />

          {/* Theme toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
