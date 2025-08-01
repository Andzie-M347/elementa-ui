import type { Meta, StoryObj } from "@storybook/react-vite";
import type { BadgeProps } from "./Badge.types";
import { Badge } from "./Badge";

// Comprehensive metadata for the Badge component
const meta: Meta<typeof Badge> = {
  title: "Components/UI/Badge",
  component: Badge,
  tags: ["autodocs", "ui", "badge"],
  parameters: {
    docs: {
      description: {
        component: `
The **Badge** component is a versatile UI element used to highlight status, labels, or notifications. 
It supports multiple variants for different contexts (e.g., primary, success, warning) and allows for 
optional prefix text for additional context. The component is fully accessible, with proper ARIA 
attributes and keyboard navigation support.

### Features:
- **Variants**: Choose from primary, secondary, success, warning, or info styles
- **Customizable Content**: Supports text content and optional prefix
- **Accessibility**: Includes ARIA labels and proper contrast ratios
- **Responsive Design**: Adapts to different screen sizes
- **Type Safety**: Built with TypeScript for robust prop validation

### Usage Example:
\`\`\`tsx
<Badge variant="success" Status="success">Complete</Badge>
\`\`\`
        `,
      },
    },
    layout: "centered", // Center the component in Storybook's canvas
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "info"],
      description: "Controls the visual style of the badge",
      table: {
        type: {
          summary: '"primary" | "secondary" | "success" | "warning" | "info"',
        },
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: { type: "text" },
      description: "The main content of the badge",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "Badge" },
      },
    },
    prefix: {
      control: { type: "text" },
      description: "Optional text to display before the main content",
      table: {
        type: { summary: "string | undefined" },
        defaultValue: { summary: "undefined" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for custom styling",
      table: {
        type: { summary: "string | undefined" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// Default story showcasing the basic usage
export const Default: Story = {
  args: {
    variant: "primary",
    children: "Badge",
    prefix: "e-ui",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Badge configuration with a primary variant and prefix text.",
      },
    },
  },
};

// Showcase all variants in a grid layout
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      }}
    >
      {["primary", "secondary", "success", "warning", "info"].map((variant) => (
        <Badge
          key={variant}
          variant={variant as BadgeProps["variant"]}
          prefix={`${variant}: `}
        >
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Badge>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Displays all available badge variants in a responsive grid layout, with each badge showing its variant name as content and prefix.",
      },
    },
  },
};

// Story demonstrating badge with long text
export const LongText: Story = {
  args: {
    variant: "info",
    children: "This is a very long badge text to test truncation",
    prefix: "Info: ",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how the Badge component handles long text content, ensuring proper truncation and responsive behavior.",
      },
    },
  },
};

// Story for accessibility testing
export const Accessibility: Story = {
  args: {
    variant: "warning",
    children: "Warning",
    prefix: "Alert: ",
    className: "focus-visible:ring-2 ring-blue-500",
  },
  parameters: {
    docs: {
      description: {
        story: `
Tests the Badge component's accessibility features, including:
- ARIA attributes for screen reader support
- Keyboard navigation (focus states)
- High contrast for better visibility
Use this story to verify focus styles and screen reader compatibility.
        `,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "aria-allowed-attr", enabled: true },
        ],
      },
    },
  },
};

// Interactive story with dynamic prefix
export const WithDynamicPrefix: Story = {
  args: {
    variant: "success",
    children: "Complete",
  },
  render: ({ variant, children, ...args }) => (
    <Badge variant={variant} prefix={args.prefix || "Dynamic: "}>
      {children}
    </Badge>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An interactive story that allows toggling the prefix text dynamically via Storybook controls.",
      },
    },
  },
};
