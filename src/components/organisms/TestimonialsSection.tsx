import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTestimonials } from '../../store/slices/testimonialsSlice';
import { motion } from 'framer-motion';
import { Text } from '../atoms';
import { TestimonialCard } from '../molecules';

export const TestimonialsSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: testimonials, loading, error } = useAppSelector(state => state.testimonials);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Text variant="heading" className="mb-8">Testimonials</Text>
            <Text variant="body" color="muted">Loading testimonials...</Text>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Text variant="heading" className="mb-8">Testimonials</Text>
            <Text variant="body" color="muted">Error loading testimonials: {error}</Text>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <Text variant="heading" weight="bold" color="primary" className="gradient-text">
            What People Say
          </Text>
          <Text variant="body" color="muted" className="max-w-2xl">
            Feedback from colleagues and clients
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.testimonial_id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
