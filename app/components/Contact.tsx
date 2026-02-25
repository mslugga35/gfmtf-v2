"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(407) 519-0984",
    href: "tel:+14075190984",
  },
  {
    icon: Mail,
    label: "Email",
    value: "LarrGrayson@gfmtf.com",
    href: "mailto:LarrGrayson@gfmtf.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seminole County, FL — Contact for Details",
    href: "tel:+14075190984",
  },
];

const hours = [
  { days: "Monday - Friday", times: "9:00 AM - 9:00 PM" },
  { days: "Saturday", times: "8:00 AM - 6:00 PM" },
  { days: "Sunday", times: "By Appointment" },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-cream grid-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="divider mb-6" />
            <h2 className="text-[var(--text-section)] text-ink mb-4">
              GET STARTED TODAY
            </h2>
            <p className="text-lg text-slate mb-8">
              Training for high-level baseball and softball players in Seminole County.
              Contact us for workout schedules, daytime homeschool sessions, and current training location.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-white border border-chalk hover:border-brass transition-colors">
                    <div className="p-3 bg-chalk">
                      <Icon size={20} className="text-ink" />
                    </div>
                    <div>
                      <div className="text-sm text-slate">{item.label}</div>
                      <div className="font-semibold text-ink">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Hours */}
            <div className="p-6 bg-white border border-chalk">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-brass" />
                <h3 className="font-display text-xl text-ink">TRAINING HOURS</h3>
              </div>
              <div className="space-y-2">
                {hours.map((slot) => (
                  <div key={slot.days} className="flex justify-between text-sm">
                    <span className="text-slate">{slot.days}</span>
                    <span className="font-medium text-ink">{slot.times}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-chalk">
                <div className="flex items-center gap-2 text-sm text-homeschool">
                  <GraduationCap size={16} />
                  <span className="font-medium">Homeschool daytime sessions: 9am - 3pm weekdays</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div id="booking" className="bg-ink p-8 md:p-10">
              <h3 className="text-3xl font-display text-cream mb-4">
                BOOK YOUR SESSION
              </h3>
              <p className="text-slate mb-6">
                Select your preferred training type and schedule a time that works
                for you. First-time athletes receive a complimentary assessment.
              </p>

              {/* Training Options */}
              <div className="space-y-3 mb-8">
                <Link
                  href="/homeschool-athletes"
                  className="flex items-center justify-between p-4 bg-homeschool/20 border border-homeschool hover:bg-homeschool/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-homeschool-light" />
                    <span className="font-semibold text-homeschool-light">Homeschool Training</span>
                  </div>
                  <ArrowRight size={18} className="text-homeschool-light group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:+14075190984"
                  className="flex items-center justify-between p-4 bg-stone border border-charcoal hover:border-brass transition-colors group"
                >
                  <div>
                    <span className="font-semibold text-cream">Private Training</span>
                    <span className="text-slate text-sm ml-2">1-on-1 sessions</span>
                  </div>
                  <ArrowRight size={18} className="text-brass group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+14075190984"
                  className="flex items-center justify-between p-4 bg-stone border border-charcoal hover:border-brass transition-colors group"
                >
                  <div>
                    <span className="font-semibold text-cream">Group Training</span>
                    <span className="text-slate text-sm ml-2">Up to 10 players</span>
                  </div>
                  <ArrowRight size={18} className="text-brass group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+14075190984"
                  className="flex items-center justify-between p-4 bg-stone border border-charcoal hover:border-brass transition-colors group"
                >
                  <div>
                    <span className="font-semibold text-cream">Academy Elite</span>
                    <span className="text-slate text-sm ml-2">Year-round program</span>
                  </div>
                  <ArrowRight size={18} className="text-brass group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Call CTA */}
              <a
                href="tel:+14075190984"
                className="btn btn-primary w-full text-center"
              >
                <Phone size={18} />
                Call Now: (407) 519-0984
              </a>

              <p className="text-center text-sm text-slate mt-4">
                Or text us anytime for a quick response
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
