import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { SpinnerProps } from './Spinner.types';
import { Spinner } from './Spinner';


const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['ring'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    color: { control: 'color' },
    speed: { control: 'text' },
    className: { control: 'text'},
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Ring: Story = {
  args: {
    variant: 'ring',
    size: 'md',
    color: undefined,
    speed: undefined,
  },
};


// ! Will be part of the upgrade
// export const Dots: Story = {
//   args: {
//     variant: 'dots',
//     size: 'md',
//     color: '#317c85',
//     speed: '1s',
//   },
// };

// export const AllSizesRing: Story = {
//   render: (args) => (
//     <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//       <Spinner {...args} size="sm" />
//       <Spinner {...args} size="md" />
//       <Spinner {...args} size="lg" />
//     </div>
//   ),
//   args: {
//     variant: 'ring',
//     color: '#317c85',
//   },
// };

// export const AllSizesDots: Story = {
//   render: (args) => (
//     <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//       <Spinner {...args} size="sm" />
//       <Spinner {...args} size="md" />
//       <Spinner {...args} size="lg" />
//     </div>
//   ),
//   args: {
//     variant: 'dots',
//     color: '#317c85',
//   },
// };
