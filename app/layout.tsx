import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gfmtraining.com"),
  title: {
    default: "GFM Training Academy | Elite Baseball & Softball Training in Sanford, FL",
    template: "%s | GFM Training Academy",
  },
  description:
    "Elite baseball and softball training in Central Florida. Specialized programs for homeschool athletes, Florida Virtual School students, and travel ball players. Private lessons, group training, and academy programs in Sanford, FL.",
  keywords: [
    // Homeschool Training
    "homeschool baseball training central florida",
    "homeschool softball training orlando",
    "homeschool athlete training seminole county",
    "florida virtual school athlete training",
    "flvs sports training sanford",
    "homeschool PE credit baseball florida",
    "daytime baseball training sanford",
    // 1-on-1 Private Training
    "private baseball lessons sanford fl",
    "1 on 1 baseball training orlando",
    "private hitting lessons seminole county",
    "personal baseball coach lake mary",
    "individual pitching lessons oviedo",
    // Group & Team Training
    "group baseball training orlando",
    "team baseball training seminole county",
    "travel ball team training sanford",
    "small group hitting lessons lake mary",
    // Hitting & Batting
    "baseball hitting coach orlando",
    "batting lessons sanford fl",
    "hitting instructor seminole county",
    "swing mechanics training oviedo",
    "bat speed training central florida",
    // Pitching
    "pitching lessons orlando fl",
    "baseball pitching coach sanford",
    "softball pitching lessons seminole county",
    "pitching velocity training lake mary",
    // Arm Care
    "arm care program orlando",
    "baseball arm health training sanford",
    "pitcher arm care seminole county",
    "throwing program central florida",
    // Speed & Agility
    "baseball speed training orlando",
    "agility training sanford fl",
    "60 yard dash training seminole county",
    "baserunning lessons lake mary",
    // Fielding
    "fielding lessons orlando",
    "infield training sanford fl",
    "defensive baseball training seminole county",
    "ground ball drills oviedo",
    // Location Keywords
    "baseball training sanford fl",
    "softball training orlando",
    "youth baseball seminole county",
    "baseball lessons lake mary",
    "baseball coaching oviedo",
    "baseball training winter springs",
    "softball lessons altamonte springs",
    "central florida baseball training",
  ],
  authors: [{ name: "Coach Larry Grayson" }],
  creator: "GFM Training Academy",
  publisher: "GFM Training Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gfmtraining.com",
    siteName: "GFM Training Academy",
    title: "GFM Training Academy | Elite Baseball & Softball Training",
    description:
      "Elite baseball and softball training for homeschool athletes, Florida Virtual School students, and travel ball players in Central Florida.",
    images: [
      {
        url: "/9.webp",
        width: 1200,
        height: 630,
        alt: "GFM Training Academy - Elite Baseball & Softball Training in Sanford FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GFM Training Academy | Elite Baseball & Softball Training",
    description:
      "Specialized training for homeschool athletes in Central Florida. Daytime sessions available.",
    images: ["/9.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://gfmtraining.com",
  },
  category: "Sports Training",
};

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsActivityLocation",
      "@id": "https://gfmtraining.com/#organization",
      name: "GFM Training Academy",
      alternateName: "GFM Training",
      description:
        "Elite baseball and softball training facility specializing in homeschool athlete development, private lessons, and academy programs in Central Florida.",
      url: "https://gfmtraining.com",
      telephone: "+1-407-519-0984",
      email: "LarrGrayson@gfmtf.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sanford",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.8001,
        longitude: -81.2732,
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
      sameAs: [
        // Add social media URLs when available
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      image: "https://gfmtraining.com/facility.jpg",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gfmtraining.com/#localbusiness",
      name: "GFM Training Academy",
      description:
        "Baseball and softball training for homeschool students, Florida Virtual School athletes, and travel ball players.",
      url: "https://gfmtraining.com",
      telephone: "+1-407-519-0984",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sanford",
        addressRegion: "FL",
        addressCountry: "US",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Training Programs",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Homeschool Athlete Training",
              description:
                "Daytime baseball and softball training designed for homeschool and Florida Virtual School students in Seminole County. Flexible scheduling, PE credit documentation available.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "1-on-1 Private Training",
              description:
                "One-on-one private baseball and softball coaching with video analysis and personalized development plans in Orlando and Sanford FL.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Group & Team Training",
              description:
                "Small group and team baseball training sessions in Seminole County. Perfect for travel ball teams.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hitting & Batting Lessons",
              description:
                "Professional hitting instruction covering swing mechanics, bat speed development, and pitch recognition in Central Florida.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pitching Development",
              description:
                "Complete pitching program covering mechanics, velocity training, and pitch arsenal development in Orlando and Sanford.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Arm Care Program",
              description:
                "Injury prevention and arm health program for baseball and softball pitchers in Seminole County.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Speed & Agility Training",
              description:
                "Baseball-specific speed training including 60-yard dash improvement, baserunning, and agility in Central Florida.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fielding Fundamentals",
              description:
                "Defensive training for infielders and outfielders including ground balls, footwork, and throwing accuracy.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://gfmtraining.com/#coach",
      name: "Larry Grayson",
      jobTitle: "Head Coach & Founder",
      birthDate: "1982-07-28",
      birthPlace: {
        "@type": "Place",
        name: "Orlando, FL",
      },
      worksFor: {
        "@id": "https://gfmtraining.com/#organization",
      },
      description:
        "2x MLB Draft pick (Oakland Athletics 2000, Texas Rangers 2002). 2002 ABCA/Rawlings NJCAA Division 1 First Team All-American. Oviedo High School County Player of the Year and All-State selection. Played 5 seasons in Texas Rangers minor league organization reaching AA level. Elite baseball coach specializing in hitting, defense, baserunning and mental game training in Seminole County and Central Florida.",
      alumniOf: [
        {
          "@type": "HighSchool",
          name: "Oviedo High School",
          address: { "@type": "PostalAddress", addressLocality: "Oviedo", addressRegion: "FL" },
        },
        {
          "@type": "CollegeOrUniversity",
          name: "State College of Florida, Manatee-Sarasota",
        },
      ],
      award: [
        "2x MLB Draft Pick (Oakland A's 2000, Texas Rangers 2002)",
        "2002 ABCA/Rawlings NJCAA Division 1 First Team All-American",
        "Oviedo High School County Player of the Year",
        "Florida All-State Selection",
      ],
      sameAs: [
        "https://www.instagram.com/coachlarrygrayson/",
        "https://www.baseball-reference.com/register/player.fcgi?id=grayso001lar",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://gfmtraining.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What age groups does GFM Training Academy train?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GFM Training Academy trains athletes from ages 8-18, from youth travel ball to high school varsity level. We work with baseball and softball players at all skill levels.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer training for homeschool athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We specialize in daytime training for homeschool students, Florida Virtual School (FLVS) students, and non-traditional schedule athletes. We can provide PE credit documentation for homeschool families who need verified physical education hours.",
          },
        },
        {
          "@type": "Question",
          name: "Where is GFM Training Academy located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GFM Training Academy is based in Sanford, FL, serving all of Seminole County and Central Florida including Orlando, Lake Mary, Altamonte Springs, Winter Springs, Oviedo, Longwood, and Casselberry.",
          },
        },
        {
          "@type": "Question",
          name: "What are Coach Larry Grayson's credentials?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Coach Larry Grayson is a 2x MLB Draft Pick (Oakland Athletics 2000, Texas Rangers 2002), 2002 ABCA/Rawlings NJCAA Division 1 First Team All-American, Oviedo High School County Player of the Year, and Florida All-State Selection. He played 5 seasons in the Texas Rangers minor league organization, reaching the AA level.",
          },
        },
        {
          "@type": "Question",
          name: "What training programs does GFM Training Academy offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer Homeschool Athlete Training, 1-on-1 Private Training with video analysis, Group & Team Training for travel ball teams, Hitting & Batting Lessons, Pitching Development, Arm Care Programs for injury prevention, Speed & Agility Training including 60-yard dash improvement, and Fielding Fundamentals for infielders and outfielders.",
          },
        },
        {
          "@type": "Question",
          name: "How do I schedule training at GFM Training Academy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact us at (407) 519-0984 or email LarrGrayson@gfmtf.com to schedule training. We offer flexible scheduling including daytime sessions for homeschool athletes. Visit gfmtraining.com to learn more about our programs.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
