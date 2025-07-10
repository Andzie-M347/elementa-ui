import type { Preview } from '@storybook/react-vite'

import '../src/styles/token.css'


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