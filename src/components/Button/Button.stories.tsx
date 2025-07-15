import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { iconOptions } from './iconOptions';

// Extend ButtonProps to include icon as a string for Storybook controls
interface ButtonStoryProps extends Omit<ButtonProps, 'icon'> {
  icon: keyof typeof iconOptions;
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'Button style variant',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
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
      description: 'Icon from iconOptions',
    },
    iconPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: 'Position of the icon',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full-width',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute',
    },
    prefix: {
      control: 'text',
      description: 'CSS class prefix for styling',
      defaultValue: 'e-ui',
    },
    'aria-label': {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    onClick: { action: 'clicked', description: 'Click event handler' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    isLoading: false,
    disabled: false,
    icon: 'None',
    iconPosition: 'left',
    children: 'Click Me',
    type: 'button',
    prefix: 'e-ui',
  },
};

export default meta;
type Story = StoryObj<ButtonStoryProps>;

const Template: StoryFn<ButtonStoryProps> = ({ icon, ...args }) => {
  const IconComponent = iconOptions[icon];
  return <Button {...args} icon={IconComponent ? <IconComponent className="w-4 h-4" /> : null} />;
};

export const Primary: Story = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'md',
  icon: 'None',
};

export const IconButton: Story = Template.bind({});
IconButton.args = {
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

