/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryPurple: "#AE8FF1",
        secondaryPurple: "#7E49ED",
        primaryGrey: "#2f2f2f",
        secondaryGrey: "#424242",
        textPurple: "#7E49ED"
        // primaryGrey: "#2f2f2f",
        // secondaryGrey: "#424242",
        // textRed: "#B74242"
      },
      fontFamily: {
        dieNasty: ["Die Nasty", "sans-serif"],
        rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}
