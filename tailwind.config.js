/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        strongPink: "rgb(255,82,119)",
        aquaIsland: "rgb(67,169,163)",
        charcoal: "rgb(45,45,45)",
        cadetGrey: "rgb(129,138,145)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lobster: ["Lobster", "cursive"],
        playfair: ["Playfair Display", "serif"],
        barlow: ["barlow ", "serif"],
        urbanist: ["Urbanist", "serif"],
        NoeDisplay: ["Noe Display"],
      },
      screens: {
        m1: "360px",
        m2: "375px",
        m3: "411px",
        d: "1366px",
        xd: "1920px",
      },
    },
  },
  plugins: [],
};

// sm	640px
// md	768px
// lg	1024px
// xl	1280px
// 2xl	1536px
