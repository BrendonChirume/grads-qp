/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src https://securetoken.googleapis.com 'self';
  script-src https://grads-qp.vercel.app 'self' 'unsafe-eval' 'unsafe-inline';
  script-src-elem https: 'self';
  child-src https://grads-qp.firebaseapp.com 'self';
  img-src https: 'self';
  style-src https://fonts.googleapis.com 'unsafe-inline' 'self';
  font-src https://fonts.gstatic.com https://fonts.googleapis.com 'self';
  connect-src https://identitytoolkit.googleapis.com 'self';
  media-src 'none';
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;
