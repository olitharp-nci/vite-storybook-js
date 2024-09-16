import React, { useEffect } from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story, context) => {
            useEffect(() => {
                // build up
                if (context?.args?.uswdsBehaviorJs) uswdsInitComponent(context.args.uswdsBehaviorJs);
                const initializedNcidsInstances = (context?.args?.ncidsInitJs) ? ncidsInitComponent(context.args.ncidsInitJs) : [];
                return () => {
                    // tear down
                    if (context?.args?.uswdsBehaviorJs) uswdsDestroyComponent(context.args.uswdsBehaviorJs);
                    if (initializedNcidsInstances.length > 0) ncidsDestroyComponent(initializedNcidsInstances);
                };
            }, []);``
            return (
                <>
                    <style type="text/css">{context?.args?.css}</style>
                    <Story/>
                </>

            );
        },
    ],
};


/**
 * USWDS on sequence: "init", "add"
 * @param component - USWDS component receptor behavior
 */
const uswdsInitComponent = (component) => {
    console.log(component);
    const target = document.body;
    if (Array.isArray(component)) {
        component.forEach((comp) => {
            comp.on(target);
        });
        console.log('if');
    } else {
        component.on(target);
        console.log(component.on(target));
    }
};

/**
 * USWDS off sequence: "teardown", "remove"
 * @param component - USWDS component receptor behavior
 */
const uswdsDestroyComponent = (component) => {
    const target = document.body;
    component.off(target);
};

/**
 * Fire off initialization callbacks.
 * @param {Function} initializer - this is an initialization function registered on the component. It should return the initialized components.
 * @returns {Object[]} - an array of the initialized components.
 */
const ncidsInitComponent = (initializer) => {
    const rtn = initializer();
    if (Array.isArray(rtn)) {
        return rtn;
    } else {
        return [rtn];
    }
};

/**
 * Fire off initialization callbacks.
 * @param initializedNcidsInstances - the initialized ncids instances.
 */
const ncidsDestroyComponent = (initializedNcidsInstances) => {
    for (const instance of initializedNcidsInstances) {
        if (typeof instance.unregister === 'function') {
            instance.unregister();
        } else {
            console.error(`Registered instance of component is lacking unregister. ${instance}`);
        }
    }
};


export default preview;
