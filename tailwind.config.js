import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#87CEEB",
        secondary: "#D3D3D3",
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

export default config;

