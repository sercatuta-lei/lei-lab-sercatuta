export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
<<<<<<< HEAD
    "name": "Jeff Lei&apos;s Lab",
=======
    "name": "Jeff Lei Lab",
>>>>>>> a63b755777e2f1d41c50db7713d1c6a61fdfb143
    "description": "Software Engineering Research Group at the University of Texas at Arlington",
    "url": "https://sercatuta-lei.github.io",
    "logo": "https://sercatuta-lei.github.io/images/logo1.png",
    "sameAs": [
      "https://github.com/sercatuta-lei"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arlington",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "affiliation": {
      "@type": "Organization",
      "name": "University of Texas at Arlington",
      "url": "https://www.uta.edu"
    },
    "foundingDate": "2010",
    "researchArea": [
      "Software Engineering",
      "Software Testing",
      "Software Verification",
      "Program Analysis",
      "Smart Contracts",
      "IoT Security",
      "Software Security"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 