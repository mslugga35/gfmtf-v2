"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <a href="tel:+14075190984" className="btn btn-primary">
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <Link href="#booking" className="btn btn-secondary">
        <Calendar size={18} />
        <span>Book</span>
      </Link>
    </div>
  );
}
