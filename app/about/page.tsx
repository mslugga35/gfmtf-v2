import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyBar from "../components/MobileStickyBar";
import { Award, GraduationCap, Trophy, Users, Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Coach Larry Grayson | 2x MLB Draft Pick",
  description:
    "Meet Coach Larry Grayson - 2x MLB Draft pick (Oakland A's, Texas Rangers), NJCAA Division 1 All-American, and Oviedo High School County Player of the Year. Elite baseball training in Seminole County, FL.",
  keywords: [
    "Larry Grayson baseball coach",
    "MLB draft pick baseball trainer",
    "Oviedo High School baseball",
    "Texas Rangers minor league",
    "baseball coach Sanford FL",
    "baseball instructor Orlando",
    "Seminole County baseball training",
  ],
  openGraph: {
    title: "Coach Larry Grayson | GFM Training Academy",
    description:
      "2x MLB Draft pick with 5 seasons in professional baseball. Elite training for youth athletes in Central Florida.",
    url: "https://gfmtraining.com/about",
  },
  alternates: {
    canonical: "https://gfmtraining.com/about",
  },
};

const credentials = [
  {
    icon: Trophy,
    title: "2x MLB Draft Pick",
    details: [
      "Oakland Athletics - 13th Round (2000)",
      "Texas Rangers - 33rd Round (2002)",
    ],
  },
  {
    icon: Award,
    title: "All-American",
    details: [
      "2002 ABCA/Rawlings NJCAA Division 1",
      "First Team All-American",
      "State College of Florida",
    ],
  },
  {
    icon: GraduationCap,
    title: "Oviedo High School",
    details: [
      "Seminole County Player of the Year",
      "Florida All-State Selection",
      "Class of 2000",
    ],
  },
  {
    icon: Users,
    title: "Professional Career",
    details: [
      "5 Seasons - Texas Rangers Organization",
      "Reached AA Level",
      "455 Games | .259 BA | .332 OBP",
    ],
  },
];

const specialties = [
  "Hitting & Swing Mechanics",
  "Outfield Defense",
  "Infield Fundamentals",
  "Baserunning",
  "Mental Game & Confidence",
  "Game Strategy",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-ink dark-section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative">
                <div className="aspect-square bg-charcoal rounded-sm overflow-hidden">
                  {/* Coach Larry working with young athlete */}
                  <img
                    src="/coach-larry.jpg"
                    alt="Coach Larry Grayson - 2x MLB Draft Pick working with youth athlete"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Credentials badge */}
                <div className="absolute -bottom-6 -right-6 bg-rust text-white p-6">
                  <div className="text-3xl font-display mb-1">2x</div>
                  <p className="text-sm font-semibold">MLB Draft Pick</p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <div className="w-16 h-1 bg-brass mb-6" />
                <h1 className="text-[var(--text-display)] text-cream mb-2">
                  COACH LARRY GRAYSON
                </h1>
                <p className="text-xl text-brass font-medium mb-6">
                  Head Coach & Founder | GFM Training Academy
                </p>
                <div className="space-y-4 text-slate mb-8">
                  <p>
                    A <span className="text-cream font-semibold">2x MLB Draft pick</span> selected
                    by the Oakland Athletics (2000) and Texas Rangers (2002), Coach Larry Grayson
                    brings professional-level experience to every training session.
                  </p>
                  <p>
                    After earning <span className="text-cream font-semibold">NJCAA Division 1
                    First Team All-American</span> honors at State College of Florida, Larry played
                    5 seasons in the Texas Rangers minor league organization, reaching the AA level.
                  </p>
                  <p>
                    A <span className="text-cream font-semibold">Seminole County native</span> and
                    Oviedo High School standout (County Player of the Year, All-State), Coach Grayson
                    returned home to develop the next generation of athletes in Central Florida.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#booking" className="btn btn-primary">
                    Book a Session
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://www.instagram.com/coachlarrygrayson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Grid */}
        <section className="section bg-white grid-bg">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <div className="w-16 h-1 bg-brass mb-6" />
              <h2 className="text-[var(--text-section)] text-ink mb-4">
                CREDENTIALS & CAREER
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.title}
                    className="p-6 bg-cream/50 border border-chalk"
                  >
                    <div className="p-3 bg-brass/20 rounded-sm inline-block mb-4">
                      <Icon size={28} className="text-brass" />
                    </div>
                    <h3 className="text-xl font-display text-ink mb-3">
                      {cred.title}
                    </h3>
                    <ul className="space-y-1">
                      {cred.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Training Specialties */}
        <section className="section bg-ink dark-section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-1 bg-brass mb-6" />
                <h2 className="text-[var(--text-section)] text-cream mb-4">
                  TRAINING SPECIALTIES
                </h2>
                <p className="text-slate mb-8">
                  Drawing from his professional playing experience and years of
                  coaching, Coach Grayson specializes in developing complete
                  ballplayers with strong fundamentals and competitive mindsets.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {specialties.map((specialty) => (
                    <div
                      key={specialty}
                      className="flex items-center gap-3 p-3 bg-stone border border-charcoal"
                    >
                      <div className="w-2 h-2 bg-brass rounded-full" />
                      <span className="text-cream text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-charcoal rounded-sm overflow-hidden">
                  <img
                    src="/9.webp"
                    alt="Indoor batting cage training at GFM Training Academy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Connection */}
        <section className="section bg-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin size={32} className="text-brass mx-auto mb-4" />
              <h2 className="text-[var(--text-section)] text-ink mb-4">
                SEMINOLE COUNTY NATIVE
              </h2>
              <p className="text-lg text-slate mb-8">
                Born in Orlando and raised in Oviedo, Coach Larry Grayson is proud
                to give back to the community that shaped his baseball career. From
                Oviedo High School to professional baseball and back home—he&apos;s
                committed to developing Central Florida&apos;s next generation of athletes.
              </p>
              <p className="text-sm text-slate">
                Serving athletes in <span className="font-semibold">Sanford</span>,
                <span className="font-semibold"> Oviedo</span>,
                <span className="font-semibold"> Lake Mary</span>,
                <span className="font-semibold"> Winter Springs</span>,
                <span className="font-semibold"> Altamonte Springs</span>,
                <span className="font-semibold"> Orlando</span>, and all of
                <span className="font-semibold"> Seminole County</span>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-rust">
          <div className="container text-center">
            <h2 className="text-[var(--text-section)] text-white mb-4">
              TRAIN WITH COACH LARRY
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Ready to take your game to the next level? Schedule a session with
              a coach who&apos;s been there—from high school standout to professional baseball.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+14075190984" className="btn bg-white text-rust hover:bg-cream">
                Call (407) 519-0984
              </a>
              <Link href="/#programs" className="btn border-2 border-white text-white hover:bg-white hover:text-rust">
                View Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
