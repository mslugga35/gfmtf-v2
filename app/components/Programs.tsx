"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  User,
  Users,
  Target,
  Zap,
  Shield,
  CircleDot,
  Footprints,
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "homeschool",
    icon: GraduationCap,
    title: "Homeschool Athlete Training",
    subtitle: "Florida Virtual & Homeschool Students",
    description:
      "Daytime training blocks designed for students with flexible schedules. Perfect for homeschool families and Florida Virtual School athletes in Seminole County.",
    features: [
      "Morning & afternoon sessions available",
      "Flexible scheduling around academics",
      "PE credit documentation available",
      "Small group environment",
    ],
    bestFor: "Homeschool & FLVS students needing daytime training",
    featured: true,
    badge: "MOST POPULAR",
    ctaText: "Learn More",
    ctaLink: "/homeschool-athletes",
  },
  {
    id: "private",
    icon: User,
    title: "1-on-1 Private Training",
    subtitle: "Individual Sessions",
    description:
      "Personalized one-on-one coaching with video analysis and customized development plans. Maximum focus on your specific needs and goals.",
    features: [
      "Video analysis & feedback",
      "Custom training plan",
      "Flexible scheduling",
      "Rapid skill development",
    ],
    bestFor: "Athletes needing focused attention on specific skills",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
  },
  {
    id: "group",
    icon: Users,
    title: "Group & Team Training",
    subtitle: "Up to 10 Players Max",
    description:
      "Small group and team sessions that create a competitive training environment. Groups capped at 10 players for quality instruction. Perfect for travel ball teams and groups wanting to train together.",
    features: [
      "Max 10 players per group",
      "Game-situation drills",
      "Team chemistry building",
      "Affordable per-player rates",
    ],
    bestFor: "Teams and players who thrive in competitive environments",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
  },
  {
    id: "hitting",
    icon: Target,
    title: "Hitting & Batting",
    subtitle: "Swing Mechanics",
    description:
      "Comprehensive hitting instruction covering stance, load, swing path, and contact. Develop power, consistency, and bat speed with proven techniques.",
    features: [
      "Swing mechanics analysis",
      "Bat speed development",
      "Pitch recognition",
      "Live batting practice",
    ],
    bestFor: "Hitters looking to improve power and consistency",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
  },
  {
    id: "pitching",
    icon: CircleDot,
    title: "Pitching Development",
    subtitle: "Velocity & Command",
    description:
      "Complete pitching program covering mechanics, velocity development, pitch arsenal, and game strategy. For baseball and softball pitchers.",
    features: [
      "Mechanics breakdown",
      "Velocity training",
      "Pitch movement & location",
      "Game strategy & sequencing",
    ],
    bestFor: "Pitchers seeking velocity and command improvements",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
  },
  {
    id: "armcare",
    icon: Shield,
    title: "Arm Care Program",
    subtitle: "Health & Longevity",
    description:
      "Injury prevention and arm health program. Proper warm-up routines, strengthening exercises, and recovery protocols to keep arms healthy all season.",
    features: [
      "Arm health assessment",
      "Strengthening exercises",
      "Proper warm-up routines",
      "Recovery protocols",
    ],
    bestFor: "All throwers wanting to stay healthy and prevent injury",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
  },
  {
    id: "speed",
    icon: Zap,
    title: "Speed & Agility",
    subtitle: "Athletic Performance",
    description:
      "Baseball and softball specific speed training. Improve your 60-yard dash, first-step quickness, baserunning, and overall athletic performance.",
    features: [
      "Sprint mechanics",
      "First-step quickness",
      "Baserunning technique",
      "Agility & reaction drills",
    ],
    bestFor: "Athletes wanting to get faster and more explosive",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
  },
  {
    id: "fielding",
    icon: Footprints,
    title: "Fielding Fundamentals",
    subtitle: "Position-Specific",
    description:
      "Defensive training for all positions. Ground ball technique, footwork, throwing mechanics, and position-specific skills for infielders and outfielders.",
    features: [
      "Ground ball mechanics",
      "Footwork & positioning",
      "Throwing accuracy",
      "Position-specific drills",
    ],
    bestFor: "Players looking to improve defensive skills",
    featured: false,
    badge: null,
    ctaText: "Book Session",
    ctaLink: "#booking",
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

export default function Programs() {
  return (
    <section id="programs" className="section bg-white grid-bg">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="divider mb-6" />
          <h2 className="text-[var(--text-section)] text-ink mb-4">
            Training Programs
          </h2>
          <p className="text-lg text-slate">
            Comprehensive baseball and softball training in Seminole County.
            From private 1-on-1 sessions to team training—find the program that fits your goals.
          </p>
        </div>

        {/* Featured Program (Homeschool) - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="card card-featured bg-gradient-to-br from-white to-blue-50/50 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-homeschool/10 rounded-sm">
                    <GraduationCap size={28} className="text-homeschool" />
                  </div>
                  <div>
                    <h3 className="text-[var(--text-card)] font-display text-ink">
                      {programs[0].title}
                    </h3>
                    <p className="text-sm text-homeschool font-medium">
                      {programs[0].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate mb-6">{programs[0].description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={programs[0].ctaLink} className="btn btn-homeschool">
                    {programs[0].ctaText}
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="#booking" className="btn btn-secondary">
                    Book Now
                  </Link>
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  {programs[0].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-homeschool flex-shrink-0 mt-0.5" />
                      <span className="text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-homeschool/10 rounded-sm">
                  <div className="flex items-center gap-2 text-sm text-homeschool font-medium">
                    <Clock size={16} />
                    <span>Daytime sessions: 9am - 3pm weekdays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Session Types Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.slice(1, 3).map((program) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card bg-ink text-cream group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-brass/20 rounded-sm">
                    <Icon size={28} className="text-brass" />
                  </div>
                </div>

                <h3 className="text-[var(--text-card)] font-display text-cream mb-1">
                  {program.title}
                </h3>
                <p className="text-sm text-brass font-medium mb-3">
                  {program.subtitle}
                </p>
                <p className="text-slate text-sm mb-4">{program.description}</p>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate">
                      <CheckCircle2 size={14} className="text-brass flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-cream transition-colors"
                >
                  {program.ctaText}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Development Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-display text-ink mb-6">SKILL DEVELOPMENT</h3>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.slice(3).map((program) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                className="card group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-chalk rounded-sm group-hover:bg-brass/20 transition-colors">
                    <Icon size={24} className="text-ink" />
                  </div>
                </div>

                <h3 className="text-[var(--text-card)] font-display text-ink mb-1">
                  {program.title}
                </h3>
                <p className="text-sm text-brass font-medium mb-3">
                  {program.subtitle}
                </p>
                <p className="text-slate text-sm mb-4">{program.description}</p>

                <ul className="space-y-2 mb-6">
                  {program.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate">
                      <CheckCircle2 size={14} className="text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-chalk">
                  <p className="text-xs text-slate mb-3">
                    <span className="font-semibold">Best for:</span> {program.bestFor}
                  </p>
                  <Link
                    href={program.ctaLink}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-rust hover:text-ink transition-colors"
                  >
                    {program.ctaText}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Seminole County SEO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate">
            Serving athletes in <span className="font-semibold">Sanford</span>, <span className="font-semibold">Oviedo</span>, <span className="font-semibold">Lake Mary</span>, <span className="font-semibold">Winter Springs</span>, <span className="font-semibold">Altamonte Springs</span>, and all of <span className="font-semibold">Seminole County, FL</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
