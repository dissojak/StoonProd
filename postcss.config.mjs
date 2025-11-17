/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-prefix-selector': {
      prefix: '.member-portfolio-layout',
      // Only apply to member portfolio CSS
      includeFiles: [/portfolios[\\/]\[Member\][\\/]css[\\/]globals\.css/],
      transform(prefix, selector, filePath) {
        // Skip @keyframes, @media, and other @ rules
        if (selector.match(/^@/)) return selector;
        // Skip :root (we'll handle CSS variables differently)
        if (selector.match(/^:root/)) return selector;
        // For body selector, make it apply globally by keeping it unscoped
        if (selector.match(/^body\s*$/)) return selector;
        // Skip the .member-portfolio-layout selector itself (CSS variables container)
        if (selector.match(/^\.member-portfolio-layout\s*$/)) return selector;
        // Add prefix to everything else
        return `${prefix} ${selector}`;
      },
    },
  },
};

export default config;
