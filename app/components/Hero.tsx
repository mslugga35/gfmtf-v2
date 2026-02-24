"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-ink dark-section dark-grid-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-stone to-ink opacity-90" />

      {/* Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brass/20 to-transparent" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-brass/20 to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Homeschool Badge - Prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Link
                href="/homeschool-athletes"
                className="inline-flex items-center gap-2 px-4 py-2 bg-homeschool/20 border border-homeschool rounded-sm hover:bg-homeschool/30 transition-colors"
              >
                <GraduationCap size={18} className="text-homeschool-light" />
                <span className="text-sm font-semibold text-homeschool-light uppercase tracking-wider">
                  Homeschool & Florida Virtual Athletes Welcome
                </span>
                <ArrowRight size={16} className="text-homeschool-light" />
              </Link>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[var(--text-hero)] leading-[0.9] text-cream mb-6"
            >
              ELITE TRAINING
              <br />
              <span className="text-brass">STARTS HERE</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-slate max-w-xl mb-8"
            >
              High-level baseball & softball development for serious athletes in Seminole County.
              Specialized <span className="text-homeschool-light font-semibold">daytime programs</span> for
              homeschool and Florida Virtual School students. Contact us for workout schedules and location details.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div>
                <div className="stat-number">500+</div>
                <div className="text-sm text-slate uppercase tracking-wider">Athletes Trained</div>
              </div>
              <div>
                <div className="stat-number">15+</div>
                <div className="text-sm text-slate uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#booking" className="btn btn-primary">
                Book Training Session
                <ArrowRight size={18} />
              </Link>
              <Link href="/homeschool-athletes" className="btn btn-homeschool">
                <GraduationCap size={18} />
                Homeschool Programs
              </Link>
            </motion.div>

            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex items-center gap-6 text-sm text-slate"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brass" />
                <span>Seminole County, FL — Contact for Location</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-brass" />
                <span>Daytime & Evening Sessions</span>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] bg-charcoal rounded-sm overflow-hidden">
              {/* Indoor batting cage training */}
              <img
                src="/9.webp"
                alt="Indoor batting cage training at GFM Training Academy in Sanford FL"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-brass" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-brass" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-homeschool text-white p-4 md:p-6 max-w-[200px]">
              <GraduationCap size={24} className="mb-2" />
              <p className="text-sm font-semibold">Daytime Training for Homeschool Athletes</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
