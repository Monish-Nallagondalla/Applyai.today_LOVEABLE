import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors
				neon: {
					orange: '#FF5F1F',
					blue: '#00FFFF',
					green: '#00FF7F',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-out': {
					'0%': {
						transform: 'translateX(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'pulse-glow': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 5px currentColor)'
					},
					'50%': {
						filter: 'drop-shadow(0 0 15px currentColor)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'text-shimmer': {
					'0%': {
						'background-position': '0% 50%'
					},
					'100%': {
						'background-position': '100% 50%'
					}
				},
				'cursor-pulse': {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(1.1)',
						opacity: '1'
					}
				},
				'cursor-trail-fade': {
					'0%': {
						opacity: '0.6',
						transform: 'translate(-50%, -50%) scale(0.5)'
					},
					'100%': {
						opacity: '0',
						transform: 'translate(-50%, -50%) scale(0.2)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-out': 'slide-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'gradient-x': 'gradient-x 5s ease infinite',
				'text-shimmer': 'text-shimmer 4s linear infinite',
				'cursor-pulse': 'cursor-pulse 2s infinite',
				'cursor-trail-fade': 'cursor-trail-fade 1s forwards'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
				'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #FF5F1F 0deg, #00FFFF 180deg, #00FF7F 360deg)',
				'shimmer': 'linear-gradient(to right, #FF5F1F, #00FFFF, #00FF7F, #FF5F1F)'
			},
			backgroundSize: {
				'300%': '300% 100%'
			},
			boxShadow: {
				'neon-orange': '0 0 5px #FF5F1F, 0 0 10px #FF5F1F, 0 0 15px #FF5F1F',
				'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
				'neon-green': '0 0 5px #00FF7F, 0 0 10px #00FF7F, 0 0 15px #00FF7F',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
			},
			fontFamily: {
				'pixel': ['monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
