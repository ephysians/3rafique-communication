import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#87CEEB", // Sky Blue Theme
        secondary: "#D3D3D3", // Light Gray Theme
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

export default config;
