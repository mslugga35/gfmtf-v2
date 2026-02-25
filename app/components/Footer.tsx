"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, GraduationCap } from "lucide-react";

const quickLinks = [
  { href: "/homeschool-athletes", label: "Homeschool Athletes" },
  { href: "#programs", label: "Training Programs" },
  { href: "/about", label: "About Coach" },
  { href: "#booking", label: "Book Session" },
  { href: "#contact", label: "Contact" },
];

const programs = [
  { label: "Homeschool Training", href: "/homeschool-athletes" },
  { label: "Private Training", href: "#booking" },
  { label: "Group Training", href: "#booking" },
  { label: "Hitting & Batting", href: "#programs" },
  { label: "Arm Care Program", href: "#programs" },
  { label: "Speed & Agility", href: "#programs" },
];

const serviceAreas = [
  "Sanford",
  "Orlando",
  "Lake Mary",
  "Altamonte Springs",
  "Winter Springs",
  "Oviedo",
  "Seminole County",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-display text-cream tracking-wide">
                GFM TRAINING
              </span>
            </Link>
            <p className="text-sm mb-6">
              High-level baseball and softball development in Seminole County, FL.
              Specialized programs for homeschool athletes and serious players.
            </p>

            {/* Homeschool Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-homeschool/20 border border-homeschool">
              <GraduationCap size={16} className="text-homeschool-light" />
              <span className="text-xs font-semibold text-homeschool-light uppercase tracking-wider">
                Homeschool Friendly
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm hover:text-cream transition-colors ${
                      link.label === "Homeschool Athletes" ? "text-homeschool-light" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
                    className={`text-sm hover:text-cream transition-colors ${
                      program.label === "Homeschool Training" ? "text-homeschool-light" : ""
                    }`}
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14075190984"
                  className="flex items-center gap-2 text-sm hover:text-cream transition-colors"
                >
                  <Phone size={14} />
                  <span className="mono">(407) 519-0984</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:LarryGrayson@gfmtf.com"
                  className="flex items-center gap-2 text-sm hover:text-cream transition-colors"
                >
                  <Mail size={14} />
                  <span>LarryGrayson@gfmtf.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>Seminole County, FL<br />Contact for Location</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas - SEO */}
      <div className="border-t border-charcoal">
        <div className="container py-6">
          <p className="text-xs text-slate/60 mb-2">
            Serving high-level athletes throughout Seminole County, FL:
          </p>
          <p className="text-xs text-slate/80">
            {serviceAreas.join(" • ")}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs">
            <p className="text-slate/60">
              © {new Date().getFullYear()} GFM Training Academy. All rights reserved.
            </p>
            <p className="text-slate/60">
              Baseball & Softball Training • Seminole County, FL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
