import {defineConfig} from 'vite'
import {join} from 'node:path'

import react from '@vitejs/plugin-react'
import twig from 'vite-plugin-twig-drupal';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    // resolve: {
    //     alias: {
    //         '@uswds/uswds/src/js/components': path.resolve(__dirname, '@uswds/uswds/packages/uswds-core/src/js/index.js'),
    //     },
    // },
    optimizeDeps: {
        //include: ['@uswds/uswds']
        //include: ['@uswds/uswds/packages/uswds-core/src/js/index.js']
        //include: ['@uswds/uswds/packages/usa-accordion/src/index.js']
    },
    plugins: [
        react(),
        twig({
            namespaces: {
                components: join(__dirname, 'src/stories/components'),
                // Other namespaces as required.
            },
            // Optional if you are using React storybook renderer. The default is 'html' and works with storybook's html
            // renderer.
            framework: 'react',
            functions: {
                // You can add custom functions - each is a function that is passed the active Twig instance and should call
                // e.g. extendFunction to register a function
                // reverse: (twigInstance) => twigInstance.extendFunction("reverse", () => (text) => text.split(' ').reverse().join(' ')),
                // e.g. extendFilter to register a filter
                // clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text.split(' ').reverse().join(' ')),
            },
            globalContext: {
                // Global variables that should be present in all templates.
                // active_theme: 'my_super_theme',
                // is_front_page: false,
            },
        }),
    ],
    build: {
        minify: true,
        cssMinify: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                includePaths: [
                    path.join(
                        __dirname,
                        'node_modules/@nciocpl/ncids-css/packages'
                    ),
                    path.join(
                        __dirname,
                        'node_modules/@nciocpl/ncids-css/uswds-packages'
                    ),
                ]
            }
        }
    }
})
