// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        accent: '#4A90E2',
        background: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
