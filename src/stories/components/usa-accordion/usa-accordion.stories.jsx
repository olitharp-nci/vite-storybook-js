import Component from './content/usa-accordion.twig';
import css from './index.scss?inline';

import { DefaultContent } from './content';
import { USAAccordion } from '@nciocpl/ncids-js/usa-accordion';

export default {
    title: 'USWDS/Components/Accordion/Default',
    tags: ['autodocs'],
    component: Component,
    args: {
    },
    parameters : {
        ncidsInitJs: () => USAAccordion.createAll(),
        css
    }
};

// For this example we want to use the skipnav component twig, but also need
// other content for the test. So we are making a local twig that includes
// the shared template.
export const Default = {
    args: DefaultContent
};