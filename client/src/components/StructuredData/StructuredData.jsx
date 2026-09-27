import { Helmet } from "react-helmet-async";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.heathtdi.com/#business",
  name: "Heath Telephone & Data",
  url: "https://www.heathtdi.com",
  telephone: "+1-706-868-1975",
  description:
    "Heath Telephone & Data provides managed IT, networking, structured cabling, fiber optics, VoIP, cybersecurity, cloud, and technology solutions across the CSRA and surrounding areas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4976 Hereford Rd",
    addressLocality: "Evans",
    addressRegion: "GA",
    postalCode: "30809",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "CSRA and surrounding areas",
  },
};

function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
}

export default StructuredData;
