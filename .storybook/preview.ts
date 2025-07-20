import type { Preview } from '@storybook/react-vite'
import { withA11y } from '@storybook/addon-a11y';


import '../src/framework/css/dist/elementa-ui.min.css'

// export const decorators = [withA11y];


export const parameters = {
  controls: {
    expanded: true,
  },
  docs: {
    label: 'Documentation',
    controls: {
      sort: 'requiredFirst',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;