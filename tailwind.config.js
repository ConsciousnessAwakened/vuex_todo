module.exports = {
    purge: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
    ],

    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {
            fontFamily : {
                sans: ['Inter'],
                mono : ['Overpass Mono', 'VT323', 'JetBrains Mono', 'Roboto Mono'],
            }
        },
    },

    variants: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
}
