import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../store/hooks";
import { goToHomeView } from "../../store/slices/uiSlice";
import { IconButton } from "./IconButton";
import { ARIA_LABELS } from "../../constants";

export const BackButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleBackToHome = () => {
    dispatch(goToHomeView());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <IconButton
        icon="mdi:chevron-left"
        onClick={handleBackToHome}
        variant="ghost"
        size="md"
        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        aria-label={ARIA_LABELS.BACK_TO_HOME}
      />
    </motion.div>
  );
};
