/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoRegular: 'RobotoRegular',
        RobotoBold: 'RobotoBold',
        RobotoMedium: 'RobotoMedium',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#040404',
      'white': '#ffffff',
      'gray1': '#f7f7f7',
      'gray2': '#7a7a7a',
      'gray3': '#E4E4E4',
      'red': '#d33131',
      'golden': '#f2b600',
      'first': '#00f751',
      'second': '#202447',
      'bermuda': '#78dcca',
    },
    screens: {
      'xs': '380px',
      'sm': '520px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
