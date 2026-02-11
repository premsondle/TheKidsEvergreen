import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const baseUrl = "https://thekidsevergreen.vercel.app";

  // 1. Main Organization Schema - Educational Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    "name": "The Kids Evergreen",
    "alternateName": ["The Kids Evergreen Play School", "Kids Evergreen Preschool"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.jpeg`,
      "width": "512",
      "height": "512"
    },
    "image": [
      {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.jpeg`,
        "caption": "The Kids Evergreen Logo"
      },
      {
        "@type": "ImageObject",
        "url": `${baseUrl}/collage1.jpeg`,
        "caption": "Children learning at The Kids Evergreen"
      },
      {
        "@type": "ImageObject",
        "url": `${baseUrl}/schoolback1.jpeg`,
        "caption": "The Kids Evergreen School Building"
      }
    ],
    "description": "The Kids Evergreen is a trusted play school and preschool in Indore offering Play Group, Nursery, LKG, and UKG programs with experienced teachers, modern facilities, CCTV surveillance, and smart classes.",
    "slogan": "Nurturing Young Minds with Love and Care",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "The Kids Evergreen Founders"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Aradhana Nagar, Chanchal Milk Dairy",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7196",
      "longitude": "75.8577"
    },
    "telephone": ["+91-9131766331", "+91-9691255100"],
    "email": "info@thekidsevergreen.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9131766331",
        "contactType": "Admissions",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9691255100",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Indore",
        "containedIn": {
          "@type": "State",
          "name": "Madhya Pradesh"
        }
      }
    ],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Online Transfer, UPI",
    "openingHours": "Mo-Sa 08:00-17:00",
    "sameAs": [
      // Add your social media URLs when available
      // "https://www.facebook.com/thekidsevergreen",
      // "https://www.instagram.com/thekidsevergreen",
      // "https://www.youtube.com/@thekidsevergreen",
      // "https://twitter.com/thekidsevergreen"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Play Group",
            "description": "Introduction to learning through play for children aged 1.5 - 2.5 years",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "The Kids Evergreen"
            },
            "educationalLevel": "Preschool",
            "timeRequired": "P1Y",
            "availableLanguage": ["English", "Hindi"]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Nursery",
            "description": "Building foundation skills for children aged 2.5 - 3.5 years",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "The Kids Evergreen"
            },
            "educationalLevel": "Preschool",
            "timeRequired": "P1Y",
            "availableLanguage": ["English", "Hindi"]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "LKG (Lower Kindergarten)",
            "description": "Lower Kindergarten program for children aged 3.5 - 4.5 years",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "The Kids Evergreen"
            },
            "educationalLevel": "Kindergarten",
            "timeRequired": "P1Y",
            "availableLanguage": ["English", "Hindi"]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "UKG (Upper Kindergarten)",
            "description": "Upper Kindergarten program for children aged 4.5 - 5.5 years",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "The Kids Evergreen"
            },
            "educationalLevel": "Kindergarten",
            "timeRequired": "P1Y",
            "availableLanguage": ["English", "Hindi"]
          }
        }
      ]
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "CCTV Surveillance",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Smart Classes",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Play Area",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Transportation Facility",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Indoor Games",
        "value": true
      }
    ]
  };

  // 2. Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": "The Kids Evergreen",
    "image": `${baseUrl}/logo.jpeg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Aradhana Nagar, Chanchal Milk Dairy",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7196",
      "longitude": "75.8577"
    },
    "url": baseUrl,
    "telephone": "+91-9131766331",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  // 3. Breadcrumb Schema - Fixed for Google Guidelines
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  // 4. Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "The Kids Evergreen",
    "description": "Best Play School and Preschool in Indore",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-IN"
  };

  // 5. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "The Kids Evergreen - Best Play School & Preschool in Indore",
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "about": {
      "@id": `${baseUrl}/#organization`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.jpeg`
    },
    "datePublished": "2020-01-01T00:00:00+05:30",
    "dateModified": new Date().toISOString(),
    "description": "The Kids Evergreen is a trusted play school and preschool in Indore offering Play Group, Nursery, LKG, and UKG programs.",
    "breadcrumb": {
      "@id": `${baseUrl}/#breadcrumb`
    },
    "inLanguage": "en-IN",
    "potentialAction": [
      {
        "@type": "ReadAction",
        "target": [baseUrl]
      }
    ]
  };

  // 6. FAQ Schema (Common Questions)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What programs does The Kids Evergreen offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Kids Evergreen offers four programs: Play Group (1.5-2.5 years), Nursery (2.5-3.5 years), LKG - Lower Kindergarten (3.5-4.5 years), and UKG - Upper Kindergarten (4.5-5.5 years)."
        }
      },
      {
        "@type": "Question",
        "name": "Where is The Kids Evergreen located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Kids Evergreen is located at 15 Aradhana Nagar, Chanchal Milk Dairy, Indore, Madhya Pradesh."
        }
      },
      {
        "@type": "Question",
        "name": "What facilities does The Kids Evergreen provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Kids Evergreen provides CCTV surveillance, smart classes, play areas, indoor games, transportation facility, experienced teachers, and affordable fees structure."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact The Kids Evergreen for admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact The Kids Evergreen at +91-9131766331 or +91-9691255100 for admission inquiries."
        }
      },
      {
        "@type": "Question",
        "name": "Is transportation available at The Kids Evergreen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Kids Evergreen provides transportation facility for students."
        }
      },
      {
        "@type": "Question",
        "name": "What makes The Kids Evergreen different from other play schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Kids Evergreen offers loving and caring teaching staff, modern facilities including CCTV and smart classes, play-based learning, affordable fees, special day celebrations, and individual attention to every child."
        }
      }
    ]
  };

  // 7. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Preschool Education",
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "areaServed": {
      "@type": "City",
      "name": "Indore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Preschool Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Play Group Program",
            "description": "Early childhood education for toddlers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nursery Program",
            "description": "Foundation building for young children"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kindergarten Program",
            "description": "LKG and UKG programs for school readiness"
          }
        }
      ]
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 1.5,
      "suggestedMaxAge": 5.5
    }
  };

  return (
    <>
      {/* Multiple Structured Data Schemas for Maximum SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Programs />
        <Features />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
