import { Heading } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "qualquer coisa",
  
  },
  argTypes: {
    children: { type: "string" },
    
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args}  />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: 'testes',
  colorDark: false,
}
