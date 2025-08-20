import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      spacing: {
        '4.5': '1.125rem',
        '4.75': '1.1875rem',
        '0.75': '0.1875rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xl/8': ['1.5rem', '2rem'],
        'xl/8': ['1.25rem', '2rem'],
        'base/7': ['1rem', '1.75rem'],
        'sm/6': ['0.875rem', '1.5rem'],
        'base/6': ['1rem', '1.5rem'],
        'sm/5': ['0.875rem', '1.25rem'],
        'xs/6': ['0.75rem', '1.5rem'],
        'xs/5': ['0.75rem', '1.25rem'],
        'sm/7': ['0.875rem', '1.75rem'],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
