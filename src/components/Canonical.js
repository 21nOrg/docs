import Head from '@docusaurus/Head';

/**
 * Canonical component for generating canonical link tags
 * @param {Object} props
 * @param {string} props.path - The relative path for the canonical URL (e.g., "/features/nodes")
 * @param {string} [props.baseUrl="https://docs.nucleus.to"] - Base URL for the canonical link
 */
export default function Canonical({ path, baseUrl = "https://docs.nucleus.to" }) {
  // Ensure path starts with /
  const normalizedPath = path?.startsWith('/') ? path : `/${path || ''}`;
  
  // Remove trailing slash except for root
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '');
  
  const canonicalUrl = `${baseUrl}${cleanPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}