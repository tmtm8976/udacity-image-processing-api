module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true,
        jasmine: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "jasmine"
    ],
    "rules": {
        '@typescript-eslint/no-var-requires': 0
    }
}
