"use client";

import { motion } from "framer-motion";
import { Clock, Users, User, CheckCircle2 } from "lucide-react";

const scheduleBlocks = [
  {
    time: "9:00 AM - 10:30 AM",
    name: "Early Bird Session",
    type: "Group Training",
    icon: Users,
    spots: "6 spots available",
    description: "Perfect for early risers. Complete training before lunch.",
  },
  {
    time: "10:30 AM - 12:00 PM",
    name: "Mid-Morning Session",
    type: "Group Training",
    icon: Users,
    spots: "6 spots available",
    description: "Most popular time slot. High energy environment.",
  },
  {
    time: "12:30 PM - 2:00 PM",
    name: "Afternoon Session",
    type: "Group Training",
    icon: Users,
    spots: "6 spots available",
    description: "Post-lunch training. Great for late morning academics.",
  },
  {
    time: "Flexible",
    name: "Private Training",
    type: "1-on-1 Sessions",
    icon: User,
    spots: "By appointment",
    description: "Customize your schedule with individual training sessions.",
  },
];

const includes = [
  "Professional instruction by Coach Larry Grayson",
  "Hitting mechanics and bat speed development",
  "Pitching/throwing mechanics (position-specific)",
  "Fielding fundamentals and footwork",
  "Mental game and competitive training",
  "Video analysis and progress tracking",
  "PE credit documentation upon request",
];

export default function HomeschoolSchedule() {
  return (
    <section id="schedule" className="section bg-ink dark-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Schedule Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="divider bg-homeschool-light mb-6" />
            <h2 className="text-[var(--text-section)] text-cream mb-4">
              DAYTIME TRAINING SCHEDULE
            </h2>
            <p className="text-slate mb-8">
              Choose the session that fits your homeschool schedule. All daytime
              sessions are designed for maximum development in a small group
              environment.
            </p>

            <div className="space-y-4">
              {scheduleBlocks.map((block, index) => {
                const Icon = block.icon;
                return (
                  <motion.div
                    key={block.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-stone border border-charcoal hover:border-homeschool/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-homeschool/20">
                          <Icon size={20} className="text-homeschool-light" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Clock size={14} className="text-brass" />
                            <span className="text-sm text-brass mono">
                              {block.time}
                            </span>
                          </div>
                          <h3 className="text-lg font-display text-cream">
                            {block.name}
                          </h3>
                          <p className="text-sm text-slate">{block.description}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs text-homeschool-light font-medium">
                          {block.type}
                        </div>
                        <div className="text-xs text-slate mt-1">{block.spots}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Includes Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-homeschool/10 border border-homeschool/30 h-full">
              <h3 className="text-2xl font-display text-cream mb-6">
                EVERY SESSION INCLUDES
              </h3>

              <ul className="space-y-4 mb-8">
                {includes.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-homeschool-light flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="p-4 bg-ink/50">
                <p className="text-sm text-cream font-medium mb-2">
                  Serving Homeschool Athletes Throughout:
                </p>
                <p className="text-xs text-slate">
                  Sanford, Orlando, Lake Mary, Altamonte Springs, Winter Springs,
                  Oviedo, and all of Seminole County
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
