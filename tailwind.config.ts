import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        rc: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        background: '#001B46',
        foreground: '#fff',
        primary: {
          DEFAULT: '#001B46',
          '100': '#C4DFF5',
          '200': '#8DBDEC',
          '300': '#4F87C7',
          '400': '#245190',
          '500': '#001B46',
          '600': '#00143C',
          '700': '#000F32',
          '800': '#000A28',
          '900': '#000721',
        },
        secondary: {
          DEFAULT: '#F05F26',
          '100': '#FEEBD3',
          '200': '#FDD1A8',
          '300': '#FAB07B',
          '400': '#F6915A',
          '500': '#F05F26',
          '600': '#CE411B',
          '700': '#AC2913',
          '800': '#8B150C',
          '900': '#730807',
        },
        dark: {
          DEFAULT: '#222222',
          '100': '#F3F3F3',
          '200': '#E8E8E8',
          '300': '#BCBCBC',
          '400': '#7A7A7A',
          '500': '#222222',
          '600': '#1D1819',
          '700': '#181112',
          '800': '#130A0D',
          '900': '#100609',
        },
      },
    },
  },
  plugins: [nextui()],
}
export default config
