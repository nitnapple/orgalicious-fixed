/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#071e2b',
          900: '#0d3347',
          800: '#124260',
          700: '#1a5278',
        },
        lime: {
          400: '#b5e04a',
          500: '#8cc63f',
          600: '#72a832',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 8s ease-in-out infinite',
        'float-3': 'float3 7s ease-in-out infinite',
        'float-4': 'float4 9s ease-in-out infinite',
        'float-5': 'float5 6.5s ease-in-out infinite',
        'float-6': 'float6 7.5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'scroll-left': 'scrollLeft 40s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
          '50%': { transform: 'translateY(-25px) rotate(-1deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(-10px) rotate(-1deg)' },
          '50%': { transform: 'translateY(10px) rotate(3deg)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(5px) rotate(2deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-2deg)' },
        },
        float5: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-22px) rotate(1deg)' },
        },
        float6: {
          '0%, 100%': { transform: 'translateY(-5px) rotate(1deg)' },
          '50%': { transform: 'translateY(15px) rotate(-3deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
