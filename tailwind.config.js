/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Raleway"],
                body: ['"Raleway"'],
            },
            padding: {
                aspect: "56.25%",
            },
            scrollSnapType: {
                y: "y mandatory",
            },
        },
    },
    variants: {
        extend: {
            display: ["group-focus"],
            opacity: ["group-focus"],
            inset: ["group-focus"],
        },
    },
    plugins: [require("tailwind-hamburgers")],
};
