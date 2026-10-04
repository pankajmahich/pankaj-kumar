import { portfolioData } from "@/constants/constants";

export function getPersonJsonLd() {
  const { personal, socialLinks } = portfolioData;
  const baseUrl = socialLinks.portfolio || "https://example.com";

  const sameAs = [
    socialLinks.github,
    socialLinks.linkedin,
    socialLinks.twitter,
  ].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.role,
    description: personal.shortBio,
    url: baseUrl,
    image: `${baseUrl}${personal.profileImage}`,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.location,
    },
    email: personal.email,
  };
}
