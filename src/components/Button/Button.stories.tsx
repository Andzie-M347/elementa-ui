// src/components/Button/Button.stories.tsx
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { iconOptions } from './iconOptions';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          None: 'None',
          ArrowRight: 'ArrowRight',
          Plus: 'Plus',
        },
      },
      options: Object.keys(iconOptions),
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    fullWidth: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = ({ icon, ...args }) => {
  const IconComponent = iconOptions[icon as keyof typeof iconOptions];
  return <Button {...args} icon={IconComponent} />;
};

export const Primary: Story = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'md',
  icon: 'None',
};

export const WithIconLeft: Story = Template.bind({});
WithIconLeft.args = {
  children: 'Continue',
  icon: 'ArrowRight',
  iconPosition: 'left',
  variant: 'primary',
};

export const WithIconRight: Story = Template.bind({});
WithIconRight.args = {
  children: 'Continue',
  icon: 'ArrowRight',
  iconPosition: 'right',
  variant: 'primary',
};

export const IconOnly: Story = Template.bind({});
IconOnly.args = {
  icon: 'Plus',
  'aria-label': 'Add item',
  variant: 'secondary',
  size: 'md',
  children: null,
};

export const Danger: Story = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
  icon: 'None',
};

export const Loading: Story = Template.bind({});
Loading.args = {
  children: 'Loading Button',
  isLoading: true,
  icon: 'None',
};

export const FullWidth: Story = Template.bind({});
FullWidth.args = {
  children: 'Full Width Button',
  fullWidth: true,
  icon: 'None',
};
