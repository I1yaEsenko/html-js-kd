module.exports = {
    extends: ['@it-incubator/stylelint-config' , "stylelint-config-tailwindcss"],
    "rules": {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind'],
            },
        ],
    }
}