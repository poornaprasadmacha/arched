/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "thearachiever.com",
      },
    ],
  },
  async rewrites() {
    return [
      /* Legacy .html aliases */
      { source: "/index.html", destination: "/" },
      { source: "/about.html", destination: "/about" },
      { source: "/what-we-do.html", destination: "/what-we-do" },
      { source: "/contact.html", destination: "/contact" },
      { source: "/competition.html", destination: "/competition" },
      { source: "/compitition/register.php", destination: "/competition/register" },
      { source: "/quizzes.html", destination: "/quizzes" },
      { source: "/metaverse.html", destination: "/metaverse" },
      { source: "/courses.html", destination: "/courses" },
      { source: "/guest-lecture.html", destination: "/guest-lecture" },
      { source: "/social-interface.html", destination: "/social-interface" },
      { source: "/terms.html", destination: "/terms" },
      { source: "/privacy_policy.html", destination: "/privacy-policy" },
      { source: "/refund_policy.html", destination: "/refund-policy" },

      /* Semantic and Lovable style aliases */
      { source: "/admin", destination: "/dashboard/admin" },
      { source: "/archiverse", destination: "/metaverse" },
      { source: "/guest-lectures", destination: "/guest-lecture" },
      { source: "/social", destination: "/social-interface" },
      { source: "/privacy", destination: "/privacy-policy" },
      { source: "/refund", destination: "/refund-policy" },
    ];
  },
};

export default nextConfig;
