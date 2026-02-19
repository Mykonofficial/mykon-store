import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Arial"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        mykon: {
          bio: "#39FF88",
          spore: "#070A08",
          ash: "#101513",
          fog: "#F6F8F7",
          steel: "#DCE2DF"
        }
      },
      boxShadow: {
        glow: "0 0 25px rgba(57, 255, 136, 0.18)",
        glowStrong: "0 0 50px rgba(57, 255, 136, 0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(57,255,136,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(57,255,136,0.08) 1px, transparent 1px)",
        haze: "radial-gradient(circle at 30% 10%, rgba(57,255,136,0.12), transparent 55%), radial-gradient(circle at 80% 50%, rgba(57,255,136,0.10), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
