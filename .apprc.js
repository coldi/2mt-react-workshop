const path = require('path');

module.exports = {
    presets: ['typescript', 'react'],
    addons: () => ({
        babel: {
            presets: (presets = []) => {
                return presets.map(preset => {
                    var name = Array.isArray(preset) ? preset[0] : preset;
                    // preset name might use windows resolved path: ...\\@babel\\preset-react\\...
                    // therefore we check @babel and preset-react separately
                    if (name.includes('@babel') && name.includes('preset-react')) {
                        return [
                            name,
                            // enable jsx automatic runtime and emotion css pragma
                            { runtime: 'automatic', importSource: '@emotion/react' },
                        ];
                    }
                    return preset;
                });
            },
            plugins: (plugins = []) => [
                ...plugins,
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                // enable additional emotion css features:
                // https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin#features
                '@emotion/babel-plugin',
            ],
        },
        eslint: {
            rules: {
                'prefer-template': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                // not required when using jsx automatic runtime
                'react/react-in-jsx-scope': 'off',
                'react/destructuring-assignment': 'off',
                // conflicts in some cases with prettier
                'react/jsx-wrap-multilines': 'off',
            },
        },
        prettier: {
            overrides: [
                {
                    files: ['*/App.tsx'],
                    options: {
                        printWidth: 120,
                    },
                },
            ],
        },
        typescript: {
            compilerOptions: {
                skipLibCheck: true,
                // enable jsx automatic runtime in tsx files
                jsx: 'react-jsx',
                // enable emotion css prop for ts
                jsxImportSource: '@emotion/react',
            },
        },
    }),
    runners: () => ({
        webpack: {
            output: {
                publicPath: '/',
            },
            performance: {
                maxEntrypointSize: 440000,
                maxAssetSize: 600000,
            },
            devServer: {
                historyApiFallback: {
                    rewrites: [
                        // required for msw service worker
                        {
                            from: /^\/mockServiceWorker.js$/,
                            to: '/assets/mockServiceWorker.js',
                        },
                    ],
                },
            },
        },
        jest: {
            testEnvironment: 'jest-environment-jsdom-sixteen',
        },
    }),
};
