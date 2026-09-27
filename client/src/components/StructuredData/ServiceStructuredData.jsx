import { Helmet } from "react-helmet-async";

function ServiceStructuredData({ name, description, url }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://www.heathtdi.com${url}`,
    provider: {
      "@id": "https://www.heathtdi.com/#business",
    },
    areaServed: {
      "@type": "Place",
      name: "CSRA and surrounding areas",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
}

export default ServiceStructuredData;
