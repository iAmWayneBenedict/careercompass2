// tailwind.config.js
import { heroui } from "@heroui/react";
import * as twForms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hide: { from: { opacity: "1" }, to: { opacity: "0" } },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        dialogOverlayShow: { from: { opacity: "0" }, to: { opacity: "1" } },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          colors: {
            default: {
              50: "#f6f8f7",
              100: "#eaefec",
              200: "#dee5e0",
              300: "#d2dcd5",
              400: "#c5d2c9",
              500: "#b9c9be",
              600: "#99a69d",
              700: "#78837c",
              800: "#585f5a",
              900: "#383c39",
              foreground: "#000",
              DEFAULT: "#e9f7ef",
            },
            primary: {
              50: "#e8f9ee",
              100: "#c8f2d6",
              200: "#a7eabe",
              300: "#87e2a7",
              400: "#66da8f",
              500: "#46d277",
              600: "#3aad62",
              700: "#2e894d",
              800: "#216439",
              900: "#153f24",
              foreground: "#000",
              DEFAULT: "#46d277",
            },
            secondary: {
              50: "#f9f9f9",
              100: "#f2f2f2",
              200: "#eaeaea",
              300: "#e2e2e2",
              400: "#dadada",
              500: "#d2d2d2",
              600: "#adadad",
              700: "#898989",
              800: "#646464",
              900: "#3f3f3f",
              foreground: "#000",
              DEFAULT: "#d2d2d2",
            },
            success: {
              50: "#dff4ed",
              100: "#b3e5d4",
              200: "#86d6ba",
              300: "#59c7a1",
              400: "#2db887",
              500: "#00a96e",
              600: "#008b5b",
              700: "#006e48",
              800: "#005034",
              900: "#003321",
              foreground: "#000",
              DEFAULT: "#00a96e",
            },
            warning: {
              50: "#fff7df",
              100: "#ffecb3",
              200: "#ffe086",
              300: "#ffd559",
              400: "#ffc92d",
              500: "#ffbe00",
              600: "#d29d00",
              700: "#a67c00",
              800: "#795a00",
              900: "#4d3900",
              foreground: "#000",
              DEFAULT: "#ffbe00",
            },
            danger: {
              50: "#ffeaeb",
              100: "#ffcdd0",
              200: "#ffb0b4",
              300: "#ff9298",
              400: "#ff757d",
              500: "#ff5861",
              600: "#d24950",
              700: "#a6393f",
              800: "#792a2e",
              900: "#4d1a1d",
              foreground: "#000",
              DEFAULT: "#ff5861",
            },
            background: "#fff",
            foreground: "#000",
            blocking: "#e9f7ef",
            content1: {
              DEFAULT: "#ffffff",
              foreground: "#000",
            },
            content2: {
              DEFAULT: "#EDF9F1",
              foreground: "#000",
            },
            content3: {
              DEFAULT: "#D3F0DE",
              foreground: "#000",
            },
            content4: {
              DEFAULT: "#B0E4C2",
              foreground: "#000",
            },
            focus: "#66cc8a",
            overlay: "#000000",
          },
        },
        dark: {
          colors: {
            default: {
              50: "#0e100e",
              100: "#1d211d",
              200: "#2b312b",
              300: "#3a423a",
              400: "#485248",
              500: "#6d756d",
              600: "#919791",
              700: "#b6bab6",
              800: "#dadcda",
              900: "#ffffff",
              foreground: "#fff",
              DEFAULT: "#485248",
            },
            primary: {
              50: "#153f24",
              100: "#216439",
              200: "#2e894d",
              300: "#3aad62",
              400: "#46d277",
              500: "#66da8f",
              600: "#87e2a7",
              700: "#a7eabe",
              800: "#c8f2d6",
              900: "#e8f9ee",
              foreground: "#000",
              DEFAULT: "#46d277",
            },
            secondary: {
              50: "#3f3f3f",
              100: "#646464",
              200: "#898989",
              300: "#adadad",
              400: "#d2d2d2",
              500: "#dadada",
              600: "#e2e2e2",
              700: "#eaeaea",
              800: "#f2f2f2",
              900: "#f9f9f9",
              foreground: "#000",
              DEFAULT: "#d2d2d2",
            },
            success: {
              50: "#003321",
              100: "#005034",
              200: "#006e48",
              300: "#008b5b",
              400: "#00a96e",
              500: "#2db887",
              600: "#59c7a1",
              700: "#86d6ba",
              800: "#b3e5d4",
              900: "#dff4ed",
              foreground: "#000",
              DEFAULT: "#00a96e",
            },
            warning: {
              50: "#4d3900",
              100: "#795a00",
              200: "#a67c00",
              300: "#d29d00",
              400: "#ffbe00",
              500: "#ffc92d",
              600: "#ffd559",
              700: "#ffe086",
              800: "#ffecb3",
              900: "#fff7df",
              foreground: "#000",
              DEFAULT: "#ffbe00",
            },
            danger: {
              50: "#4d1a1d",
              100: "#792a2e",
              200: "#a6393f",
              300: "#d24950",
              400: "#ff5861",
              500: "#ff757d",
              600: "#ff9298",
              700: "#ffb0b4",
              800: "#ffcdd0",
              900: "#ffeaeb",
              foreground: "#000",
              DEFAULT: "#ff5861",
            },
            background: "#010b06",
            foreground: "#99d2ad",
            content1: {
              DEFAULT: "#14291c",
              foreground: "#fff",
            },
            content2: {
              DEFAULT: "#295237",
              foreground: "#fff",
            },
            content3: {
              DEFAULT: "#3d7a53",
              foreground: "#fff",
            },
            content4: {
              DEFAULT: "#52a36e",
              foreground: "#000",
            },
            focus: "#66cc8a",
            overlay: "#ffffff",
          },
        },
      },
      layout: {
        disabledOpacity: "0.5",
      },
    }),
    // twForms,
  ],
};
