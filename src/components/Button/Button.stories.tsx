import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";
import { iconOptions } from "./iconOptions";
import copy from "copy-to-clipboard";
import type { ButtonProps } from "./Button.types";

import { Highlight, themes } from "prism-react-renderer";

interface ButtonStoryProps extends Omit<ButtonProps, "icon"> {
  icon: keyof typeof iconOptions;
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
    size: { control: "radio", options: ["sm", "md", "lg"] },
    icon: { control: "select", options: Object.keys(iconOptions) },
    iconPosition: { control: "inline-radio", options: ["left", "right"] },
    fullWidth: { control: "boolean" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    type: { control: "select", options: ["button", "submit", "reset"] },
    prefix: { control: "text", defaultValue: "e-ui" },
    "aria-label": { control: "text" },
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

const buildCodeSnippet = (args: ButtonStoryProps) => {
  const {
    variant,
    size,
    iconPosition,
    fullWidth,
    isLoading,
    disabled,
    type,
    prefix,
    "aria-label": ariaLabel,
    children,
  } = args;

  const props = [
    `variant="${variant}"`,
    `size="${size}"`,
    iconPosition !== "left" ? `iconPosition="${iconPosition}"` : "",
    fullWidth ? "fullWidth" : "",
    isLoading ? "isLoading" : "",
    disabled ? "disabled" : "",
    type !== "button" ? `type="${type}"` : "",
    prefix !== "e-ui" ? `prefix="${prefix}"` : "",
    ariaLabel ? `aria-label="${ariaLabel}"` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = children ?? "";

  return `<Button ${props}>${content}</Button>`;
};

const Template: StoryFn<ButtonStoryProps> = ({ icon, ...args }) => {
  const IconComponent = iconOptions[icon];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(buildCodeSnippet(args));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "inline-flex" }}>
        <Button
          {...args}
          icon={IconComponent ? <IconComponent className="w-4 h-4" /> : null}
        />
      </div>


      <div
        style={{
          border: "1px solid #e5e7eb",
          backgroundColor: "#f9fafb",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontFamily: "Menlo, Monaco, Consolas, monospace",
          fontSize: "0.85rem",
          lineHeight: "1.4",
          position: "relative",
        }}
      >
        <Highlight
          theme={themes.github}
          code={buildCodeSnippet(args)}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, padding: "1rem", borderRadius: "0.5rem" }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            backgroundColor: copied ? "#22c55e" : "#2563eb",
            color: "white",
            border: "none",
            padding: "0.35rem 0.75rem",
            borderRadius: "0.375rem",
            fontSize: "0.75rem",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export const Primary: Story = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const IconButton: Story = Template.bind({});
IconButton.args = {
  icon: "Plus",
  "aria-label": "Add item",
  variant: "secondary",
  children: null,
};

export const Danger: Story = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger",
};

export const Tertiary: Story = Template.bind({});
Danger.args = {
  children: "Tertiary Button",
  variant: "tertiary",
};

export const Loading: Story = Template.bind({});
Loading.args = {
  children: "Loading Button",
  isLoading: true,
};

export const FullWidth: Story = Template.bind({});
FullWidth.args = {
  children: "Full Width Button",
  fullWidth: true,
};
