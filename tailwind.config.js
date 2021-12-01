module.exports = {
    purge: ['./index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'mobile': '375px',
            'desktop': '1440px',
        },
        colors: {
            white: 'hsl(0, 0%, 100%)',
            blue: 'hsl(215, 51%, 70%)',
            cyan: 'hsl(178, 100%, 50%)',
            'dark-blue': {
                DEFAULT: 'hsl(217, 54%, 11%)',
                card: 'hsl(216, 50%, 16%)',
                line: 'hsl(215, 32%, 27%)',
            },
        },
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
        },
        fontWeight: {
            light: 300,
            normal: 400,
            semibold: 700,
        },
        extend: {},
    },
    variants: {
        extend: {
            flex: ['group-hover'],
            justifyContent: ['group-hover'],
            alignItems: ['group-hover'],
            display: ['group-hover'],
        },
    },
    plugins: [],
}
