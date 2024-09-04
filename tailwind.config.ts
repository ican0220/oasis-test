import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'main-bg' : '#D2C9BD',
        'page-bg' : '#dfd9d0',
        'footer-banner' : '#AD967D',
        'red' : '#A95661',
      },
      fontFamily : {
        'ivy-mode' : ['ivy-mode', 'fallback-font-family'],
        'nunito-sans' : ['nunito-sans', 'fallback-font-family'],
        'poppins' : ['poppins', 'fallback-font-family'],
        'spartan' : ['spartan-mb-5', 'fallback-font-family'],
      }
    },
  },
  plugins: [],
};
export default config;
