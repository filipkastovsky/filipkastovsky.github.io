function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "bounce-r": "bounce-r 1s infinite",
        "bounce-l": "bounce-l 1s infinite",
      },
      keyframes: {
        "bounce-r": {
          "0%, 100%": {
            transform: "translateX(0%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1);",
          },
          "50%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1);",
          },
        },
        "bounce-l": {
          "0%, 100%": {
            transform: "translateX(0%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1);",
          },
          "50%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1);",
          },
        },
      },
    },

    textColor: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: withOpacity("--color-fill"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: withOpacity("--color-border"),
        fill: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
      transparent: "transparent",
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
