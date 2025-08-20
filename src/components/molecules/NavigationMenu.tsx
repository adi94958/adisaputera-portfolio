import React, { useState, useEffect, useCallback } from 'react';
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

  // Constants
  const NAVBAR_HEIGHT = 80;
  const VISIBILITY_THRESHOLD = 0.2;
  const SCROLL_OFFSET = 50;

  // ========================================
  // SCROLL SPY LOGIC
  // ========================================
  
  const handleScroll = useCallback(() => {
    const getSectionsFromItems = () => {
      return items
        .map(item => ({
          id: item.href.substring(1),
          href: item.href,
          element: document.getElementById(item.href.substring(1))
        }))
        .filter(section => section.element);
    };

    const calculateVisibility = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const adjustedTop = elementTop - NAVBAR_HEIGHT;
      const adjustedBottom = elementBottom - NAVBAR_HEIGHT;

      let visibleHeight = 0;
      
      if (adjustedTop >= 0 && adjustedBottom <= windowHeight) {
        visibleHeight = elementHeight;
      } else if (adjustedTop < 0 && adjustedBottom > 0) {
        visibleHeight = adjustedBottom;
      } else if (adjustedTop < windowHeight && adjustedBottom > windowHeight) {
        visibleHeight = windowHeight - adjustedTop;
      } else if (adjustedTop < 0 && adjustedBottom > windowHeight) {
        visibleHeight = windowHeight;
      }

      return visibleHeight / windowHeight;
    };

    const sections = getSectionsFromItems();
    if (sections.length === 0) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Handle bottom of page
    if (scrollPosition + windowHeight >= documentHeight - SCROLL_OFFSET) {
      setActiveItem(sections[sections.length - 1].href);
      return;
    }

    // Special handling for testimonials section
    const testimonialsElement = document.getElementById('testimonials');
    if (testimonialsElement) {
      const testimonialsRect = testimonialsElement.getBoundingClientRect();
      const testimonialsTop = testimonialsRect.top - NAVBAR_HEIGHT;
      const testimonialsBottom = testimonialsRect.bottom - NAVBAR_HEIGHT;
      
      if (testimonialsTop <= windowHeight / 2 && testimonialsBottom > windowHeight / 2) {
        setActiveItem('#projects');
        return;
      }
    }

    // Find most visible section
    let currentSection = sections[0].href;
    let maxVisibility = 0;

    sections.forEach(section => {
      if (section.element) {
        const visibilityPercentage = calculateVisibility(section.element);
        
        if (visibilityPercentage > maxVisibility && visibilityPercentage > VISIBILITY_THRESHOLD) {
          maxVisibility = visibilityPercentage;
          currentSection = section.href;
        }
      }
    });

    setActiveItem(currentSection);
  }, [items]);

  useEffect(() => {
    const timer = setTimeout(handleScroll, 100);

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
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [items, handleScroll]);

  // ========================================
  // NAVIGATION HANDLERS
  // ========================================

  const handleItemClick = (href: string) => {
    setActiveItem(href);
    onToggle();
    
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // ========================================
  // STYLE CLASSES
  // ========================================

  const getDesktopLinkClasses = (isActive: boolean) => {
    const baseClasses = "font-medium relative transition-colors duration-200";
    const activeClasses = "text-primary-600 dark:text-primary-400";
    const inactiveClasses = "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (isActive: boolean) => {
    const baseClasses = "block py-3 px-4 rounded-lg font-medium transition-colors duration-200";
    const activeClasses = "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30";
    const inactiveClasses = "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800/50";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // ========================================
  // ANIMATION VARIANTS
  // ========================================

  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const tapAnimation = { scale: 0.95 };

  const mobileHoverAnimation = {
    scale: 1.02,
    transition: { duration: 0.2 }
  };

  const underlineAnimation = {
    layoutId: "activeTab",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const mobileMenuAnimation = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { type: 'spring' as const, damping: 20, stiffness: 300 }
  };

  const overlayAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // ========================================
  // RENDER COMPONENTS
  // ========================================

  const renderDesktopNavigation = () => (
    <nav className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleItemClick(item.href);
          }}
          className={getDesktopLinkClasses(activeItem === item.href)}
          whileHover={hoverAnimation}
          whileTap={tapAnimation}
        >
          {item.label}
          {activeItem === item.href && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
              {...underlineAnimation}
            />
          )}
        </motion.a>
      ))}
    </nav>
  );

  const renderMobileNavigation = () => (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            {...overlayAnimation}
            onClick={onToggle}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
          
          {/* Mobile Menu */}
          <motion.nav
            {...mobileMenuAnimation}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-secondary-900 border-l border-secondary-200 dark:border-secondary-700 z-50 md:hidden"
          >
            <div className="p-6 pt-20">
              {/* Navigation Items */}
              {items.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.href);
                  }}
                  className={getMobileLinkClasses(activeItem === item.href)}
                  whileHover={activeItem !== item.href ? mobileHoverAnimation : {}}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Theme Toggle */}
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
  );

  const renderMobileMenuButton = () => (
    <IconButton
      icon={isOpen ? 'mdi:close' : 'mdi:menu'}
      onClick={onToggle}
      className="md:hidden relative z-[9998]"
      variant="ghost"
    />
  );

  // ========================================
  // MAIN RENDER
  // ========================================

  return (
    <>
      {renderMobileMenuButton()}
      {renderDesktopNavigation()}
      {renderMobileNavigation()}
    </>
  );
};
