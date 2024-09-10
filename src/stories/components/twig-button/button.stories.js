// stories/Button.stories.js

// Button will be a Javascript function that accepts variables for the twig template.
import Button from './button.twig';

// Import stylesheets, this could be a sass or postcss file too.
import './button.css';
// You may also have JavaScript for the component.
//import './path/to/some/javascript/button.js';

export default {
    title: 'Example/Button2',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        modifier: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
        },
    },
    // Just pass along the imported variable.
    component: Button,
};

// Set default variables in the story.
export const Default = {
    args: { title: 'Click me' },
};

export const Primary = {
    args: { title: "Click mek", modifier: "secondary" },
};

// Advanced example.
export const ButtonStrip = {
    name: 'Button group',
    render: () => `
    ${Button({title: 'Button 1', modifier: 'primary'})} 
    ${Button({title: 'Button 2', modifier: 'secondary'})}
  `
}