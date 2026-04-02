import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourportfolio.com"; // Update this to your actual domain

  const pages: MetadataRoute.Sitemap = ["/", "/AboutMe", "/Blogs", "/Projects", "/Skills", "/SocailMedia", "/view-blogs", "/ViewProject"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
   ...pages,
  ];
}
