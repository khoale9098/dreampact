module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": ["error", {
           "endOfLine":"auto"
        }],
        "@typescript-eslint/explicit-function-return-type": "off",
        'no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ],
    
        /**
         * @description Enforces that there is no spreading for any JSX attribute
         */
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/no-empty-interface': ['warn'],
        'react/destructuring-assignment': 'off',
        'no-plusplus': 'off',
        '@typescript-eslint/no-empty-interface': ['warn'],
        "@typescript-eslint/no-explicit-any": 'off',
        '@typescript-eslint/ban-ts-ignore': 'off'      
      
    },
    "settings": {
        "react": {
            "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    }
};