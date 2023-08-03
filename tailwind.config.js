/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        'Lime-Green': 'hsl(163, 72%,41%)',
        'Bright-Red': 'hsl(356,69%,56%)',
        'Facebook': 'hsl(208, 92%, 53%) ',
        'Twitter': 'hsl(203,89%,53%)',
        'YouTube': 'hsl(348,97%,39%)',
        // gradientColorStops: {
        //   "instagram": [
        //     {
        //       "color": "hsl(210, 78%, 56%)",
        //       "stop": 0,
        //     },
        //     {
        //       "color": "hsl(146, 68%, 55%)",
        //       "stop": 1,
        //     },
        //   ],
        //   "custom-gradient-2": [
        //     {
        //       "color": "hsl(37, 97%, 70%)",
        //       "stop": 0,
        //     },
        //     {
        //       "color": "hsl(329, 70%, 58%)",
        //       "stop": 1,
        //     },
        //   ],
        // },
        'very-Dark-Blue': 'hsl(230, 17%, 14%)',
        'Very-Dark-Blue-Top-BG': 'hsl(232, 19%, 15%)',
        'Dark-Desaturated-Blue': 'hsl(228, 28%, 20%)',
        'Desaturated-Blue': 'hsl(228, 34%, 66%)',
        'white': 'hsl(0, 0%, 100%)',
        'Very-Pale-Blue-Top-Bg': 'hsl(225, 100%, 98%)',
        'Light-Grayish-Blue-Card-BG': 'hsl(227, 47%, 96%)',
        'Dark-Grayish-Blue-Text': 'hsl(228, 12%, 44%)',
        'Very-Dark-Blue': 'hsl(230, 17%, 14%)'
      },
      fontFamily: {
        'Inter': ['Inter ', 'sans- serif ']
      }
    },
  plugins: [],
}