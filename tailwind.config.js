/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                nunito: ['Nunito', 'sans-serif'],
            },
            colors: {
                primary: '#407BFF',
                blue: '#6fe7dd',
                yellow: '#ffc93c',
                pink: '#f73859',
                gray: '#939393',
                gray100: '#0000001a',
            },
            screens: {
                sm: '640px',

                md: '768px',

                lg: '1024px',

                xl: '1140px',

                '2xl': '1536px',
            },
            minWidth: {
                10: '10rem',
            },
        },
    },
    variants: {
        margin: ['group-hover'],
        display: ['group-hover'],
        visibility: ['group-hover'],
    },
    plugins: [],
};
