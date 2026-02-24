import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyBar from "../components/MobileStickyBar";
import HomeschoolHero from "./HomeschoolHero";
import HomeschoolBenefits from "./HomeschoolBenefits";
import HomeschoolSchedule from "./HomeschoolSchedule";
import HomeschoolCTA from "./HomeschoolCTA";

export const metadata: Metadata = {
  title: "Homeschool Athlete Training | Daytime Baseball & Softball Programs",
  description:
    "Specialized daytime training for homeschool students and Florida Virtual School athletes in Central Florida. Flexible scheduling, PE credit documentation, small group environment. Baseball and softball development in Sanford, FL.",
  keywords: [
    "homeschool baseball training central florida",
    "homeschool softball training orlando",
    "florida virtual school athlete training",
    "flvs sports training",
    "homeschool pe credit florida",
    "daytime baseball training sanford",
    "homeschool sports training seminole county",
    "homeschool athlete development orlando",
    "central florida homeschool baseball",
    "homeschool softball lessons lake mary",
    "daytime youth sports training",
    "flexible schedule baseball training",
  ],
  openGraph: {
    title: "Homeschool Athlete Training | GFM Training Academy",
    description:
      "Daytime baseball & softball training designed for homeschool and Florida Virtual School students. Flexible scheduling around academics.",
    url: "https://gfmtraining.com/homeschool-athletes",
    images: [
      {
        url: "/2.webp",
        width: 1200,
        height: 630,
        alt: "Homeschool athlete training at GFM Training Academy in Sanford FL",
      },
    ],
  },
  alternates: {
    canonical: "https://gfmtraining.com/homeschool-athletes",
  },
};

// JSON-LD for Homeschool Training Service
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Homeschool Athlete Training Program",
  description:
    "Specialized daytime baseball and softball training for homeschool students and Florida Virtual School (FLVS) athletes. Flexible scheduling, small groups, PE credit documentation available.",
  provider: {
    "@type": "SportsActivityLocation",
    name: "GFM Training Academy",
    telephone: "+1-407-519-0984",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sanford",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Sanford" },
    { "@type": "City", name: "Orlando" },
    { "@type": "City", name: "Lake Mary" },
    { "@type": "City", name: "Altamonte Springs" },
    { "@type": "City", name: "Winter Springs" },
    { "@type": "City", name: "Oviedo" },
    { "@type": "AdministrativeArea", name: "Seminole County" },
    { "@type": "AdministrativeArea", name: "Central Florida" },
  ],
  serviceType: "Sports Training",
  audience: {
    "@type": "Audience",
    audienceType: "Homeschool students, Florida Virtual School athletes",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    eligibleRegion: {
      "@type": "Place",
      name: "Central Florida",
    },
  },
};

export default function HomeschoolAthletesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HomeschoolHero />
        <HomeschoolBenefits />
        <HomeschoolSchedule />
        <HomeschoolCTA />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
