import React from "react";
import { motion } from "framer-motion";
import { Text } from "../atoms";
import { SkillCard } from "../molecules";
import { useAppSelector } from "../../hooks/redux";

export const SkillsSection: React.FC = () => {
  const { data: abilities } = useAppSelector((state) => state.abilities);

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
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Text variant="heading" weight="bold" color="primary">
              Skills & Expertise
            </Text>
            <Text variant="body" color="muted" className="max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </Text>
          </motion.div>

          {/* Skill Expertise */}
          {abilities?.skill_expertise && (
            <motion.div variants={itemVariants} className="space-y-6">
              <Text variant="subheading" weight="semibold" color="secondary">
                Expertise
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {abilities.skill_expertise.map((skill, index) => (
                  <SkillCard
                    key={skill.ability_id}
                    ability={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Languages & Frameworks */}
          {abilities?.language_framework && (
            <motion.div variants={itemVariants} className="space-y-6">
              <Text variant="subheading" weight="semibold" color="secondary">
                Languages & Frameworks
              </Text>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {abilities.language_framework.map((tech, index) => (
                  <SkillCard
                    key={tech.ability_id}
                    ability={tech}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Tools */}
          {abilities?.tools && (
            <motion.div variants={itemVariants} className="space-y-6">
              <Text variant="subheading" weight="semibold" color="secondary">
                Tools & Technologies
              </Text>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {abilities.tools.map((tool, index) => (
                  <SkillCard
                    key={tool.ability_id}
                    ability={tool}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
