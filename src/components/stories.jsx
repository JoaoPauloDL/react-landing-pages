import { Heading } from "./Heading";


export default {
    title: 'Heading',
    component: Heading,
    args: {
        children:'qualquer coisa'
    }

};

export const Template = (args) => <Heading {...args} />