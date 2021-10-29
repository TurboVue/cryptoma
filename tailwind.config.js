module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'cyan': {
                    DEFAULT: '#00C2FF',
                    '50': '#F0FAFC',
                    '100': '#DBF4F7',
                    '200': '#B1E8EE',
                    '300': '#87DBE5',
                    '400': '#5DCFDC',
                    '500': '#00C2FF',
                    '600': '#259FAE',
                    '700': '#1C7984',
                    '800': '#13525A',
                    '900': '#0A2C30'
                },

                'grey': {
                    DEFAULT: '#ADB9C7',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFFFFF',
                    '300': '#EAEDF0',
                    '400': '#CBD3DC',
                    '500': '#ADB9C7',
                    '600': '#8F9FB2',
                    '700': '#70859E',
                    '800': '#596C82',
                    '900': '#445364'
                },
            },
            fontSize: {
                'xs': '.6rem',
                'sm': '.7rem',
                'tiny': '.85rem',
                'base': '1rem',
                'lg': '1.2rem',
                'xl': '1.5rem',
                '2xl': '2rem',
                '3xl': '2.5875rem',
                '4xl': '3rem',
                '5xl': '3.25rem',
                '6xl': '4rem',
                '7xl': '5rem',
            },
            screens: {
                '2xl': { 'max': '1535px' },
                // => @media (max-width: 1535px) { ... }

                'xl': { 'max': '1023px' },
                // => @media (max-width: 1279px) { ... }

                'lg': { 'max': '995px' },
                // => @media (max-width: 1023px) { ... }

                'md': { 'max': '768px' },
                // => @media (max-width: 767px) { ... }

                'sm': { 'max': '425px' },
                // => @media (max-width: 639px) { ... }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}