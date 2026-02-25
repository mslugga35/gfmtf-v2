"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, GraduationCap, ArrowRight } from "lucide-react";

export default function HomeschoolCTA() {
  return (
    <section className="section bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-homeschool/10 border border-homeschool/30 mb-6">
            <GraduationCap size={18} className="text-homeschool" />
            <span className="text-sm font-semibold text-homeschool uppercase tracking-wider">
              Start Your Journey Today
            </span>
          </div>

          <h2 className="text-[var(--text-section)] text-ink mb-4">
            FREE ASSESSMENT FOR NEW ATHLETES
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-8">
            We train high-level baseball and softball athletes during the school day.
            Contact us for daytime workout schedules, current training location, and
            a complimentary assessment. No commitment required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="tel:+14075190984" className="btn btn-homeschool">
              <Phone size={18} />
              Call (407) 519-0984
            </a>
            <a
              href="mailto:LarryGrayson@gfmtf.com?subject=Homeschool%20Training%20Inquiry"
              className="btn btn-secondary"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 p-8 bg-white border border-chalk">
            <div className="text-center">
              <Phone size={24} className="text-homeschool mx-auto mb-2" />
              <div className="text-sm text-slate mb-1">Call or Text</div>
              <a
                href="tel:+14075190984"
                className="text-lg font-semibold text-ink hover:text-homeschool transition-colors mono"
              >
                (407) 519-0984
              </a>
            </div>
            <div className="text-center">
              <Mail size={24} className="text-homeschool mx-auto mb-2" />
              <div className="text-sm text-slate mb-1">Email</div>
              <a
                href="mailto:LarryGrayson@gfmtf.com"
                className="text-lg font-semibold text-ink hover:text-homeschool transition-colors"
              >
                LarryGrayson@gfmtf.com
              </a>
            </div>
            <div className="text-center">
              <MapPin size={24} className="text-homeschool mx-auto mb-2" />
              <div className="text-sm text-slate mb-1">Location</div>
              <span className="text-lg font-semibold text-ink">
                Seminole County, FL
              </span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-display text-ink text-center mb-8">
            COMMON QUESTIONS FROM HOMESCHOOL FAMILIES
          </h3>

          <div className="space-y-4">
            {[
              {
                q: "What ages do you train?",
                a: "We work with athletes ages 8-18, from beginners to advanced players pursuing college opportunities.",
              },
              {
                q: "Can I get PE credit documentation?",
                a: "Yes! We provide detailed training logs and assessments suitable for Florida homeschool PE credit requirements.",
              },
              {
                q: "Do you train both baseball and softball?",
                a: "Absolutely. Coach Grayson has extensive experience developing both baseball and softball athletes.",
              },
              {
                q: "What if my schedule changes week to week?",
                a: "We understand homeschool schedules are flexible. We work with families to accommodate changing academic needs.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-chalk"
              >
                <div className="flex items-start gap-3">
                  <ArrowRight
                    size={16}
                    className="text-homeschool flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-ink mb-1">{faq.q}</h4>
                    <p className="text-sm text-slate">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
