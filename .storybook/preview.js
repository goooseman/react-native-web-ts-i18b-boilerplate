import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@storybook/addon-console";

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
  controls: { expanded: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
