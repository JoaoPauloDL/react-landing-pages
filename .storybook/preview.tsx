import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    ),
  ],
};

export default preview;
