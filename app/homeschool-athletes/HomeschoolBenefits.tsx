"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Users,
  FileText,
  Calendar,
  Target,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Daytime Availability",
    description:
      "Train during school hours when facilities are less crowded. Get more personalized attention without competing for space with after-school athletes.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Build training around your academic schedule, not the other way around. Change session times as your curriculum needs shift throughout the year.",
  },
  {
    icon: Users,
    title: "Small Group Environment",
    description:
      "Maximum 6 athletes per session ensures quality instruction. More reps, more feedback, and faster development than crowded evening sessions.",
  },
  {
    icon: FileText,
    title: "PE Credit Documentation",
    description:
      "Receive detailed training logs and assessments suitable for PE credit submission. We understand Florida homeschool requirements and can help document progress.",
  },
  {
    icon: Target,
    title: "Focused Development",
    description:
      "Without the distractions of traditional school sports politics, focus purely on skill development and reaching your athletic potential.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "Professional facility with trained staff. Parents welcome to observe sessions. Background-checked coaches committed to athlete development.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeschoolBenefits() {
  return (
    <section className="section bg-white grid-bg">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="divider mb-6" />
          <h2 className="text-[var(--text-section)] text-ink mb-4">
            WHY HOMESCHOOL FAMILIES CHOOSE US
          </h2>
          <p className="text-lg text-slate">
            We understand the unique needs of homeschool athletes. Our daytime
            programs are designed specifically for students with flexible
            schedules seeking quality athletic development.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="p-6 bg-cream/50 border border-chalk hover:bg-cream transition-colors"
              >
                <div className="p-3 bg-homeschool/10 rounded-sm inline-block mb-4">
                  <Icon size={24} className="text-homeschool" />
                </div>
                <h3 className="text-xl font-display text-ink mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FLVS Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-homeschool/5 border-2 border-homeschool/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display text-ink mb-3">
                FLORIDA VIRTUAL SCHOOL ATHLETES
              </h3>
              <p className="text-slate">
                Many of our athletes attend Florida Virtual School (FLVS) and
                appreciate the flexibility to train during traditional school
                hours. We work with your online learning schedule to find the
                perfect training times.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "FLVS Full Time",
                "FLVS Flex",
                "County Virtual Programs",
                "Private Homeschool",
              ].map((program) => (
                <span
                  key={program}
                  className="px-4 py-2 bg-white border border-homeschool/30 text-sm font-medium text-homeschool"
                >
                  {program}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
