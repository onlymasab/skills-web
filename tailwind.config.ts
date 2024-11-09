import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      'ms' : '320px',
      'mm' : '375px',
      'ml' : '425px',
      'tb' : '768px',
      'lp' : '1024px',
      'll' : '1440px',
      '4k' : '2560px'
    },
    extend: {
      colors : {
        "primary-redOrange" : "#FF4500"
      },
    },
  },
  plugins: [],
};
export default config;
