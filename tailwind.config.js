/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./index.html",
    ],
    theme: {
        extend: {
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                spin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}