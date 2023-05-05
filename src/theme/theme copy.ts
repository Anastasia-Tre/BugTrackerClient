export const temp = "";

// color design tokens export
export const tokens1 = (mode: string) => ({
  ...(mode === "dark"
    ? {
        grey: {
          1: "#e0e0e0",
          2: "#c2c2c2",
          3: "#a3a3a3",
          4: "#858585",
          5: "#666666",
          6: "#525252",
          7: "#3d3d3d",
          8: "#292929",
          9: "#141414",
        },
        primary: {
          1: "#d0d1d5",
          2: "#a1a4ab",
          3: "#727681",
          4: "#1F2A40",
          5: "#141b2d",
          6: "#101624",
          7: "#0c101b",
          8: "#080b12",
          9: "#040509",
        },
        greenAccent: {
          1: "#dbf5ee",
          2: "#b7ebde",
          3: "#94e2cd",
          4: "#70d8bd",
          5: "#4cceac",
          6: "#3da58a",
          7: "#2e7c67",
          8: "#1e5245",
          9: "#0f2922",
        },
        redAccent: {
          1: "#f8dcdb",
          2: "#f1b9b7",
          3: "#e99592",
          4: "#e2726e",
          5: "#db4f4a",
          6: "#af3f3b",
          7: "#832f2c",
          8: "#58201e",
          9: "#2c1f",
        },
        blueAccent: {
          1: "#e1e2fe",
          2: "#c3c6fd",
          3: "#a4a9fc",
          4: "#868dfb",
          5: "#6870fa",
          6: "#535ac8",
          7: "#3e4396",
          8: "#2a2d64",
          9: "#151632",
        },
      }
    : {
        grey: {
          1: "#141414",
          2: "#292929",
          3: "#3d3d3d",
          4: "#525252",
          5: "#666666",
          6: "#858585",
          7: "#a3a3a3",
          8: "#c2c2c2",
          9: "#e0e0e0",
        },
        primary: {
          1: "#040509",
          2: "#080b12",
          3: "#0c101b",
          4: "#f2f0f0", // manually changed
          5: "#141b2d",
          6: "#1F2A40",
          7: "#727681",
          8: "#a1a4ab",
          9: "#d0d1d5",
        },
        greenAccent: {
          1: "#0f2922",
          2: "#1e5245",
          3: "#2e7c67",
          4: "#3da58a",
          5: "#4cceac",
          6: "#70d8bd",
          7: "#94e2cd",
          8: "#b7ebde",
          9: "#dbf5ee",
        },
        redAccent: {
          1: "#2c1f",
          2: "#58201e",
          3: "#832f2c",
          4: "#af3f3b",
          5: "#db4f4a",
          6: "#e2726e",
          7: "#e99592",
          8: "#f1b9b7",
          9: "#f8dcdb",
        },
        blueAccent: {
          1: "#151632",
          2: "#2a2d64",
          3: "#3e4396",
          4: "#535ac8",
          5: "#6870fa",
          6: "#868dfb",
          7: "#a4a9fc",
          8: "#c3c6fd",
          9: "#e1e2fe",
        },
      }),
});
// import { createContext, useState, useMemo } from "react";
// import { createTheme } from "@mui/material/styles";
// import { PaletteMode } from "@mui/material";

// // color design tokens export
// export const tokens = (mode: string) => ({
//   ...(mode === "dark"
//     ? {
//         grey: {
//           100: "#e0e0e0",
//           200: "#c2c2c2",
//           300: "#a3a3a3",
//           400: "#858585",
//           500: "#666666",
//           600: "#525252",
//           700: "#3d3d3d",
//           800: "#292929",
//           900: "#141414",
//         },
//         primary: {
//           100: "#d0d1d5",
//           200: "#a1a4ab",
//           300: "#727681",
//           400: "#1F2A40",
//           500: "#141b2d",
//           600: "#101624",
//           700: "#0c101b",
//           800: "#080b12",
//           900: "#040509",
//         },
//         greenAccent: {
//           100: "#dbf5ee",
//           200: "#b7ebde",
//           300: "#94e2cd",
//           400: "#70d8bd",
//           500: "#4cceac",
//           600: "#3da58a",
//           700: "#2e7c67",
//           800: "#1e5245",
//           900: "#0f2922",
//         },
//         redAccent: {
//           100: "#f8dcdb",
//           200: "#f1b9b7",
//           300: "#e99592",
//           400: "#e2726e",
//           500: "#db4f4a",
//           600: "#af3f3b",
//           700: "#832f2c",
//           800: "#58201e",
//           900: "#2c100f",
//         },
//         blueAccent: {
//           100: "#e1e2fe",
//           200: "#c3c6fd",
//           300: "#a4a9fc",
//           400: "#868dfb",
//           500: "#6870fa",
//           600: "#535ac8",
//           700: "#3e4396",
//           800: "#2a2d64",
//           900: "#151632",
//         },
//       }
//     : {
//         grey: {
//           100: "#141414",
//           200: "#292929",
//           300: "#3d3d3d",
//           400: "#525252",
//           500: "#666666",
//           600: "#858585",
//           700: "#a3a3a3",
//           800: "#c2c2c2",
//           900: "#e0e0e0",
//         },
//         primary: {
//           100: "#040509",
//           200: "#080b12",
//           300: "#0c101b",
//           400: "#f2f0f0", // manually changed
//           500: "#141b2d",
//           600: "#1F2A40",
//           700: "#727681",
//           800: "#a1a4ab",
//           900: "#d0d1d5",
//         },
//         greenAccent: {
//           100: "#0f2922",
//           200: "#1e5245",
//           300: "#2e7c67",
//           400: "#3da58a",
//           500: "#4cceac",
//           600: "#70d8bd",
//           700: "#94e2cd",
//           800: "#b7ebde",
//           900: "#dbf5ee",
//         },
//         redAccent: {
//           100: "#2c100f",
//           200: "#58201e",
//           300: "#832f2c",
//           400: "#af3f3b",
//           500: "#db4f4a",
//           600: "#e2726e",
//           700: "#e99592",
//           800: "#f1b9b7",
//           900: "#f8dcdb",
//         },
//         blueAccent: {
//           100: "#151632",
//           200: "#2a2d64",
//           300: "#3e4396",
//           400: "#535ac8",
//           500: "#6870fa",
//           600: "#868dfb",
//           700: "#a4a9fc",
//           800: "#c3c6fd",
//           900: "#e1e2fe",
//         },
//       }),
// });

// // mui theme settings
// export const themeSettings = (mode: "light" | "dark") => {
//   const colors = tokens(mode);
//   return {
//     palette: {
//       mode: mode,
//       ...(mode === "dark"
//         ? {
//             // palette values for dark mode
//             primary: {
//               main: colors.primary[500],
//             },
//             secondary: {
//               main: colors.greenAccent[500],
//             },
//             neutral: {
//               dark: colors.grey[7],
//               main: colors.grey[500],
//               light: colors.grey[100],
//             },
//             background: {
//               default: colors.primary[500],
//             },
//           }
//         : {
//             // palette values for light mode
//             primary: {
//               main: colors.primary[100],
//             },
//             secondary: {
//               main: colors.greenAccent[500],
//             },
//             neutral: {
//               dark: colors.grey[7],
//               main: colors.grey[500],
//               light: colors.grey[100],
//             },
//             background: {
//               default: "#fcfcfc",
//             },
//           }),
//     },
//     typography: {
//       fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//       fontSize: 12,
//       h1: {
//         fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//         fontSize: 40,
//       },
//       h2: {
//         fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//         fontSize: 32,
//       },
//       h3: {
//         fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//         fontSize: 24,
//       },
//       h4: {
//         fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//         fontSize: 20,
//       },
//       h5: {
//         fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//         fontSize: 16,
//       },
//       h6: {
//         fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
//         fontSize: 14,
//       },
//     },
//   };
// };

// // context for color mode
// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState<"light" | "dark">("light");

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode: PaletteMode) =>
//           prevMode === "light" ? "dark" : "light"
//         );
//       },
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   return [theme, colorMode] as const;
// };
