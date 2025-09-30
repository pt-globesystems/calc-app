/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Experimental features
  experimental: {
    // Enable app directory (Next.js 13+ App Router)
    appDir: true,
  },
  
  // Image optimization configuration
  images: {
    // Add any external image domains here if needed
    domains: [],
    // Enable image optimization
    unoptimized: false,
  },
  
  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Environment variables that should be available on the client side
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers configuration for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Webpack configuration customization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add any custom webpack configuration here
    
    // Example: Add support for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  // Output configuration
  output: 'standalone',
  
  // Trailing slash configuration
  trailingSlash: false,
  
  // PoweredBy header removal
  poweredByHeader: false,
  
  // Compression
  compress: true,
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    // Development-specific configuration
    onDemandEntries: {
      // Period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // Number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 2,
    },
  }),
  
  // Production configuration
  ...(process.env.NODE_ENV === 'production' && {
    // Production-specific configuration
    generateEtags: true,
    httpAgentOptions: {
      keepAlive: true,
    },
  }),
};

module.exports = nextConfig;