import React from "react";
import { motion } from "framer-motion";
import { Card, Text } from "../atoms";
import type { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 relative">
        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-primary-200 text-3xl">
          "
        </div>

        <div className="pr-8 space-y-4">
          <Text variant="body" color="muted" className="italic leading-relaxed">
            "{testimonial.feedback}"
          </Text>

          <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-semibold text-primary-600">
                {testimonial.name.charAt(0)}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <Text variant="body" weight="semibold">
                {testimonial.name}
              </Text>
              <Text variant="caption" color="muted">
                {testimonial.position}
              </Text>
              <Text variant="small" color="muted">
                {testimonial.organization}
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
