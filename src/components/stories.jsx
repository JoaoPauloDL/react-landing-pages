import { Heading } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "qualquer coisa",
    light: false,
  },
  argTypes: {
    children: { type: "string" },
    light: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};
