import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Text, Button, Card } from "../atoms";
import { fetchContact } from "../../store/slices/contactSlice";
import { SECTION_TITLES, SECTION_DESCRIPTIONS, BUTTON_LABELS, CONTACT_LABELS, FORM_PLACEHOLDERS } from "../../constants";
import type { RootState, AppDispatch } from "../../store";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: contact } = useSelector((state: RootState) => state.contact);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!contact) {
      dispatch(fetchContact());
    }
  }, [dispatch, contact]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Form submitted successfully - handled by parent component
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center space-y-6 mb-16"
          >
            <Text variant="display" weight="bold" color="gradient">
              {SECTION_TITLES.CONTACT}
            </Text>
            <Text
              variant="body"
              color="muted"
              className="max-w-2xl mx-auto text-lg"
            >
              {SECTION_DESCRIPTIONS.CONTACT}
            </Text>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <Text variant="subheading" weight="semibold" color="secondary">
                  {CONTACT_LABELS.LETS_CONNECT}
                </Text>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="caption" color="muted">
                        {CONTACT_LABELS.EMAIL}
                      </Text>
                      <Text variant="body" weight="medium">
                        {contact?.email}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="caption" color="muted">
                        {CONTACT_LABELS.LOCATION}
                      </Text>
                      <Text variant="body" weight="medium">
                        {contact?.address}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="caption" color="muted">
                        {CONTACT_LABELS.STATUS}
                      </Text>
                      <Text variant="body" weight="medium">
                        {CONTACT_LABELS.STATUS_AVAILABLE}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <Text variant="subheading" weight="semibold" color="secondary">
                  {CONTACT_LABELS.PREFERRED_CONTACT}
                </Text>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="caption" weight="medium" color="primary">
                        {CONTACT_LABELS.EMAIL_PREFERRED}
                      </Text>
                      <Text variant="small" color="muted">
                        {CONTACT_LABELS.RESPONDS_WITHIN}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent-50 dark:bg-accent-900/30">
                    <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-accent-600 dark:text-accent-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <Text variant="caption" weight="medium" color="accent">
                        {CONTACT_LABELS.VIDEO_CALL}
                      </Text>
                      <Text variant="small" color="muted">
                        {CONTACT_LABELS.AVAILABLE_FOR_DISCUSSIONS}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        autoComplete="name"
                        className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white"
                        placeholder={FORM_PLACEHOLDERS.NAME}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autoComplete="email"
                        className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white"
                        placeholder={FORM_PLACEHOLDERS.EMAIL}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                      className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white"
                      placeholder={FORM_PLACEHOLDERS.SUBJECT}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      autoComplete="off"
                      className="w-full px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-secondary-800 dark:text-white resize-none"
                      placeholder={FORM_PLACEHOLDERS.MESSAGE}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="solid"
                    color="primary"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    {BUTTON_LABELS.SEND_MESSAGE}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
