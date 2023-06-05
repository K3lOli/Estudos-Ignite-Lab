import React from "react";
import type { Preview } from "@storybook/react";

import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viteFinal: (config, { configType }) => {
      if (configType === 'PRODUCTION') {
        config.base = '/Estudos-Ignite-Lab/'
      }
    },
  },
};

export default preview;
