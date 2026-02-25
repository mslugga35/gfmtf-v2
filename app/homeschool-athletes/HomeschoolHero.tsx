"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeschoolHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 bg-homeschool overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-sm mb-6"
            >
              <GraduationCap size={18} className="text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Florida Virtual & Homeschool Welcome
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--text-hero)] leading-[0.9] text-white mb-6"
            >
              DAYTIME TRAINING
              <br />
              <span className="text-white/80">FOR HOMESCHOOL ATHLETES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-xl mb-8"
            >
              Specialized baseball and softball development designed for students with
              flexible schedules. Train during the day while other athletes are in
              school.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {[
                "Morning & afternoon sessions available",
                "PE credit documentation provided",
                "Small group environment (max 6 athletes)",
                "Flexible scheduling around academics",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-white/80 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Time Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-sm mb-8"
            >
              <Clock size={20} className="text-white" />
              <span className="text-white font-semibold">
                Daytime Sessions: 9am - 3pm Weekdays
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="tel:+14075190984" className="btn bg-white text-homeschool hover:bg-cream">
                Schedule Free Assessment
                <ArrowRight size={18} />
              </a>
              <Link href="#schedule" className="btn border-2 border-white text-white hover:bg-white hover:text-homeschool">
                View Schedule
              </Link>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] bg-white/10 rounded-sm overflow-hidden">
              {/* Homeschool training image - young athlete fielding */}
              <Image
                src="/2.webp"
                alt="Youth athlete training at GFM Training Academy - homeschool baseball program"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
              <div className="text-4xl font-display text-homeschool mb-1">100+</div>
              <p className="text-sm text-slate">Homeschool Athletes Trained</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
