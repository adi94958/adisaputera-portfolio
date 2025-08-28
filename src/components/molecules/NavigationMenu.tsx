import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "./ThemeToggle";

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
  const [activeItem, setActiveItem] = useState("");

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
        .map((item) => ({
          id: item.href.substring(1),
          href: item.href,
          element: document.getElementById(item.href.substring(1)),
        }))
        .filter((section) => section.element);
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
    const testimonialsElement = document.getElementById("testimonials");
    if (testimonialsElement) {
      const testimonialsRect = testimonialsElement.getBoundingClientRect();
      const testimonialsTop = testimonialsRect.top - NAVBAR_HEIGHT;
      const testimonialsBottom = testimonialsRect.bottom - NAVBAR_HEIGHT;

      if (
        testimonialsTop <= windowHeight / 2 &&
        testimonialsBottom > windowHeight / 2
      ) {
        setActiveItem("#projects");
        return;
      }
    }

    // Find most visible section
    let currentSection = sections[0].href;
    let maxVisibility = 0;

    sections.forEach((section) => {
      if (section.element) {
        const visibilityPercentage = calculateVisibility(section.element);

        if (
          visibilityPercentage > maxVisibility &&
          visibilityPercentage > VISIBILITY_THRESHOLD
        ) {
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

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [items, handleScroll]);

  // ========================================
  // NAVIGATION HANDLERS
  // ========================================

  const handleItemClick = (href: string) => {
    setActiveItem(href);
    onToggle(); // Close menu

    const element = document.querySelector(href);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle body overflow when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ========================================
  // STYLE CLASSES
  // ========================================

  const getDesktopLinkClasses = (isActive: boolean) => {
    const baseClasses = "font-medium relative transition-colors duration-200";
    const activeClasses = "text-primary-600 dark:text-primary-400";
    const inactiveClasses =
      "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (isActive: boolean) => {
    const baseClasses =
      "block py-3 px-4 rounded-lg font-medium transition-colors duration-200";
    const activeClasses =
      "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30";
    const inactiveClasses =
      "text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800/50";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // ========================================
  // RENDER COMPONENTS
  // ========================================

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            {activeItem === item.href && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => {
            console.log("Button clicked! Current isOpen:", isOpen);
            onToggle();
          }}
          className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Icon
            icon={isOpen ? "mdi:close" : "mdi:menu"}
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay - harus di-render terpisah */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
              onClick={() => {
                console.log("Overlay clicked!");
                onToggle();
              }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-[9999] md:hidden"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                height: "100vh",
                width: "16rem",
              }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => {
                    console.log("Close button clicked!");
                    onToggle();
                  }}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  type="button"
                  aria-label="Close menu"
                >
                  <Icon icon="mdi:close" width={24} height={24} />
                </button>
              </div>

              {/* Menu items */}
              <div className="px-4 py-2">
                {items.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Menu item clicked:", item.label);
                      handleItemClick(item.href);
                    }}
                    className={getMobileLinkClasses(activeItem === item.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Theme Toggle */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: items.length * 0.1 }}
                >
                  <div className="px-4">
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
