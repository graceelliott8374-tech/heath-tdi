import { Helmet } from "react-helmet-async";

const services = [
  {
    name: "Managed IT Services",
    url: "/services/managed-it",
  },
  {
    name: "Network Solutions",
    url: "/services/network-solutions",
  },
  {
    name: "Business WiFi & Wireless Solutions",
    url: "/services/wifi-wireless",
  },
  {
    name: "Structured Cabling Services",
    url: "/services/structured-cabling",
  },
  {
    name: "Fiber Optic Installation & Services",
    url: "/services/fiber-optics",
  },
  {
    name: "Business VoIP & Communication Systems",
    url: "/services/voip",
  },
  {
    name: "Business Security & Surveillance",
    url: "/services/security-surveillance",
  },
  {
    name: "Business Cybersecurity Services",
    url: "/services/cybersecurity",
  },
  {
    name: "Cloud & Hybrid IT Solutions",
    url: "/services/cloud-solutions",
  },
];

function ServicesStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Heath Telephone & Data Services",
    url: "https://www.heathtdi.com/services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        url: `https://www.heathtdi.com${service.url}`,
        provider: {
          "@id": "https://www.heathtdi.com/#business",
        },
        areaServed: {
          "@type": "Place",
          name: "CSRA and surrounding areas",
        },
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export default ServicesStructuredData;
