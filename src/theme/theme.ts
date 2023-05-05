import { createContext, useCallback, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { darkColors, lightColors } from "./colors";

export const tokens = (mode: PaletteMode) =>
  mode === "light" ? lightColors : darkColors;

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);
  const palette = {
    mode,
    primary: {
      main: colors.primary[mode === "dark" ? 5 : 1],
    },
    secondary: {
      main: colors.greenAccent[5],
    },
    neutral: {
      dark: colors.grey[7],
      main: colors.grey[5],
      light: colors.grey[1],
    },
    background: {
      default: mode === "dark" ? colors.primary[5] : "#fcfcfc",
    },
  };
  const typography = {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  };
  return createTheme({ palette, typography });
};

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const toggleColorMode = useCallback(() => {
    setMode((prevMode: PaletteMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  }, []);

  const colorMode = useMemo(() => ({ toggleColorMode }), [toggleColorMode]);
  return [theme, colorMode] as const;
};
