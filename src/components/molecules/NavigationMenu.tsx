import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '../atoms';
import { ThemeToggle } from './ThemeToggle';

interface NavigationMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  items: Array<{
    label: string;
    href: string;
    icon?: string;
  }>;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isOpen,
  onToggle,
  items,
}) => {
  const [activeItem, setActiveItem] = useState('');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        id: item.href.substring(1), // Remove # from href
        href: item.href,
        element: document.getElementById(item.href.substring(1))
      })).filter(section => section.element);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const navbarHeight = 80; // Account for navbar height
      
      // If we're at the bottom of the page, activate the last section
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveItem(sections[sections.length - 1].href);
        return;
      }

      // Special handling for testimonials section - treat it as part of projects
      const testimonialsElement = document.getElementById('testimonials');
      if (testimonialsElement) {
        const testimonialsRect = testimonialsElement.getBoundingClientRect();
        const testimonialsTop = testimonialsRect.top - navbarHeight;
        const testimonialsBottom = testimonialsRect.bottom - navbarHeight;
        
        // If we're in testimonials section, keep projects active
        if (testimonialsTop <= windowHeight / 2 && testimonialsBottom > windowHeight / 2) {
          setActiveItem('#projects');
          return;
        }
      }

      // Find the section that's most visible in the viewport
      let currentSection = sections[0].href;
      let maxVisibility = 0;

      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const elementHeight = rect.height;

          // Adjust for navbar height
          const adjustedTop = elementTop - navbarHeight;
          const adjustedBottom = elementBottom - navbarHeight;

          // Calculate how much of the element is visible
          let visibleHeight = 0;
          
          if (adjustedTop >= 0 && adjustedBottom <= windowHeight) {
            // Element is fully visible
            visibleHeight = elementHeight;
          } else if (adjustedTop < 0 && adjustedBottom > 0) {
            // Element is partially visible from top
            visibleHeight = adjustedBottom;
          } else if (adjustedTop < windowHeight && adjustedBottom > windowHeight) {
            // Element is partially visible from bottom
            visibleHeight = windowHeight - adjustedTop;
          } else if (adjustedTop < 0 && adjustedBottom > windowHeight) {
            // Element covers the entire viewport
            visibleHeight = windowHeight;
          }

          // Calculate visibility percentage
          const visibilityPercentage = visibleHeight / windowHeight;

          // Update current section if this one is more visible
          if (visibilityPercentage > maxVisibility && visibilityPercentage > 0.2) {
            maxVisibility = visibilityPercentage;
            currentSection = section.href;
          }
        }
      });

      setActiveItem(currentSection);
    };

    // Set initial active item with a small delay to ensure DOM is ready
    const timer = setTimeout(handleScroll, 100);

    // Add scroll listener with throttling
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [items]);

  const handleItemClick = (href: string) => {
    setActiveItem(href);
    onToggle();
    
    // Smooth scroll to section with navbar offset
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Height of navbar (16 + 4 padding = 20 * 4 = 80px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <IconButton
        icon={isOpen ? 'mdi:close' : 'mdi:menu'}
        onClick={onToggle}
        className="md:hidden relative z-[9998]"
        variant="ghost"
      />

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center space-x-8">
        {items.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item.href);
            }}
            className={`font-medium relative ${
              activeItem === item.href 
                ? 'text-primary-600 dark:text-primary-400' 
                : 'text-secondary-700 dark:text-secondary-300'
            }`}
            whileHover={{ 
              scale: 1.05,
              color: activeItem === item.href ? undefined : "rgb(37 99 235)", // primary-600
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            {activeItem === item.href && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-secondary-900 border-l border-secondary-200 dark:border-secondary-700 z-50 md:hidden"
            >
              <div className="p-6 pt-20">
                {items.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.href);
                    }}
                    className={`block py-3 px-4 rounded-lg font-medium ${
                      activeItem === item.href
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                        : 'text-secondary-700 dark:text-secondary-300'
                    }`}
                    whileHover={
                      activeItem !== item.href
                        ? {
                            color: "rgb(37 99 235)", // primary-600
                            backgroundColor: "rgb(241 245 249)", // secondary-100
                            transition: { duration: 0.2 }
                          }
                        : {}
                    }
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Theme Toggle for Mobile */}
                <motion.div
                  className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: items.length * 0.1 }}
                >
                  <div className="px-4">
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
