
import React from 'react';

export const SEO: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "A.S Nepal Japanese Language Academy",
    "url": "https://asnepal.edu.np",
    "logo": "https://asnepal.edu.np/logo.png",
    "description": "Leading Japanese language academy in Kathmandu offering specialized JLPT prep, SSW training and professional visa consultancy.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kamaladi",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-1-4245566",
      "contactType": "admissions"
    },
    "sameAs": [
      "https://facebook.com/asnepalacademy",
      "https://instagram.com/asnepaljapan"
    ]
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
