import { Helmet } from "react-helmet-async";

const SITE_NAME = "Heath Telephone & Data";
const SITE_URL = "https://www.heathtdi.com";

function SEO({
  title,
  description,
  canonicalPath = "/",
  robots = "index, follow",
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default SEO;
