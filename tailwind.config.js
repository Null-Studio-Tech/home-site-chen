/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'laptop': { max: '1316px' },
      'tablet': { max: '1008px' },
      'mobile': { max: '600px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'highlight-normal': {
          'from': { 'background-position': '0px' },
          'to': { 'background-position': '-3312px' }
        },
        'highlight-small': {
          'from': { 'background-position': '0px' },
          'to': { 'background-position': '-1440px' }
        }
      },
      animation: {
        'highlight-normal': 'highlight-normal 1s steps(18)',
        'highlight-small': 'highlight-small 1s steps(18)'
      },

    },
  },
  plugins: [],
}
