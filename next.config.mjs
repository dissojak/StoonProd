/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// 🚨 ALERT MESSAGES
// const ALERTS = {
//   missingNextAuthUrl: `
// ******************************************************
// 🚨 CRITICAL: NEXTAUTH_SIGNIN_URL is NOT set! 🚨
// Please create a .env file with the correct subdomain.
// ******************************************************
// `,
//   // you can add more alerts here like:
//   // anotherAlert: `...message...`
// };

// // STOP SERVER if NEXTAUTH_SIGNIN_URL is missing
// if (!process.env.NEXTAUTH_SIGNIN_URL) {
//   console.log("\x1b[31m%s\x1b[0m", ALERTS.missingNextAuthUrl); // red text
//   process.exit(1); // exit immediately
// }

export default nextConfig;
