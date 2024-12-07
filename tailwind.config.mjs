/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    
                    "primary": "#ea580c",
                                        
                    "secondary": "#f97316",
                                        
                    "accent": "#f59e0b",
                                        
                    "neutral": "#c2410c",
                                        
                    "base-100": "#0a0807",
          
					"base-content": "#c9cbcf",
                                        
                    "info": "#2563eb",
                                        
                    "success": "#84cc16",
                                        
                    "warning": "#ef4444",
                                        
                    "error": "#b91c1c",
                    },
                },
            ],
        },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
