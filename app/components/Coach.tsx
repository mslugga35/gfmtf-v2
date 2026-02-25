"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Calendar } from "lucide-react";

const highlights = [
  {
    icon: Award,
    label: "2x MLB Draft",
    description: "Oakland A's & Texas Rangers",
  },
  {
    icon: Target,
    label: "All-American",
    description: "NJCAA Division 1 First Team",
  },
  {
    icon: Users,
    label: "5 Pro Seasons",
    description: "Texas Rangers Organization",
  },
  {
    icon: Calendar,
    label: "Oviedo HS",
    description: "County Player of the Year",
  },
];

export default function Coach() {
  return (
    <section id="coach" className="section bg-ink dark-section dark-grid-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-charcoal rounded-sm overflow-hidden">
              {/* Coach Larry working with young athlete */}
              <img
                src="/coach-larry.jpg"
                alt="Coach Larry Grayson working with youth athlete at GFM Training Academy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brass" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brass" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-rust text-white p-6 max-w-[180px]">
              <div className="text-4xl font-display mb-1">15+</div>
              <p className="text-sm font-medium">Years Developing Champions</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="divider mb-6" />
            <h2 className="text-[var(--text-section)] text-cream mb-4">
              COACH LARRY GRAYSON
            </h2>
            <p className="text-xl text-brass font-medium mb-6">
              Building Better Athletes, One Player at a Time
            </p>

            <div className="space-y-4 text-slate mb-8">
              <p>
                <span className="text-brass font-semibold">2x MLB Draft pick</span> (Oakland A&apos;s 2000, Texas Rangers 2002)
                and <span className="text-brass font-semibold">Oviedo High School County Player of the Year</span>.
                Coach Larry Grayson played 5 seasons in the Texas Rangers minor league system,
                reaching the AA level.
              </p>
              <p>
                A <span className="text-brass font-semibold">2002 ABCA/Rawlings NJCAA Division 1 First Team All-American</span> at
                State College of Florida, Larry earned All-State honors at Oviedo High School
                before his professional career. He knows what it takes to compete at the highest levels.
              </p>
              <p>
                Specializing in hitting, outfield & infield defense, baserunning, and the mental
                game, Coach Grayson creates personalized training plans focused on fundamentals
                and building competitive confidence.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-stone border border-charcoal"
                  >
                    <Icon size={24} className="text-brass mb-2" />
                    <div className="text-2xl font-display text-cream">{item.label}</div>
                    <div className="text-sm text-slate">{item.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
