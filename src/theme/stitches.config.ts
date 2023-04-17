import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import commonTheme from "./common";
import lightThemeOpts from "./light-theme";
import darkThemeOpts from "./dark-theme";

// create light theme by default
const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    colors: {
      ...commonTheme.theme.colors,
      ...lightThemeOpts.colors,
    },
    shadows: {
      ...lightThemeOpts.shadows,
    },
  },
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = stitches;

// create a dark theme by overriding default theme
export const darkTheme = createTheme("dark-theme", darkThemeOpts);

// stitches types
export type CSS = Stitches.CSS<typeof config>;
export type VariantProps<T extends {}> = Stitches.VariantProps<T>;
export type StitchesTheme = typeof theme;
