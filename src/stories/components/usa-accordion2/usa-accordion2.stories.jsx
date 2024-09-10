import Component from './content/usa-accordion.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content';
import { accordion } from '@uswds/uswds';

export default {
    title: 'Components/Accordion2/Default',
    tags: ['autodocs'],
    component: Component,
    args: {
        uswdsBehaviorJs: accordion,
        css
    },
};

// For this example we want to use the skipnav component twig, but also need
// other content for the test. So we are making a local twig that includes
// the shared template.
export const Default = {
    args: DefaultContent
};