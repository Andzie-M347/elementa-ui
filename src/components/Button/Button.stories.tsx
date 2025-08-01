// Button.stories.tsx

import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import type { ButtonProps } from "./Button.types";
import { iconOptions } from "./iconOptions";

type IconKey = keyof typeof iconOptions;

interface ButtonStoryProps extends Omit<ButtonProps, "icon"> {
  icon: IconKey;
  iconColor?: string;
}

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "danger"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    icon: {
      control: "select",
      options: Object.keys(iconOptions),
    },
    iconColor: {
      control: "color",
    },
    iconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
    },
    fullWidth: { control: "boolean" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    prefix: {
      control: "text",
    },
    "aria-label": {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
  args: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    isLoading: false,
    disabled: false,
    icon: "None",
    iconPosition: "left",
    children: "Click Me",
    type: "button",
    prefix: "e-ui",
  },
};

export default meta;

type Story = StoryObj<ButtonStoryProps>;

const renderWithIcon: StoryFn<ButtonStoryProps> = ({
  icon,
  iconColor,
  ...props
}) => {
  const Icon = iconOptions[icon];

  const styledIcon = Icon ? (
    <Icon style={{ color: iconColor ?? "currentColor" }} />
  ) : undefined;

  return <Button {...props} icon={styledIcon} />;
};

/* -------------------------------------------------------------------------- */
/*                                Button Stories                              */
/* -------------------------------------------------------------------------- */

export const Primary: Story = {
  render: renderWithIcon,
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: renderWithIcon,
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  render: renderWithIcon,
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};

export const Danger: Story = {
  render: renderWithIcon,
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Loading: Story = {
  render: renderWithIcon,
  args: {
    children: "Loading Button",
    isLoading: true,
  },
};

export const FullWidth: Story = {
  render: renderWithIcon,
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
};

export const IconButton: Story = {
  render: renderWithIcon,
  args: {
    icon: "Plus",
    "aria-label": "Add item",
    variant: "secondary",
    children: null,
  },
};
