module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true

  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native",
    "classes",
  ],
  "globals": {
    "dip" : true,
    "fdip" : true,
    "globalBackHandler": true,
    "jasmine": true,
    "idx": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "classes/space": 2,
    "classes/name": [2, "class", "method"],
    "classes/style": 2,
    "strict": 0,
    "prefer-const": "error",
    "react/prop-types": [
      "error",{}
    ],
    "brace-style": "error",
    "new-cap": ["error",
      { "newIsCap": true }
    ],
    "block-spacing": "error",
    "keyword-spacing":"error",
    "no-irregular-whitespace": "error",
    "space-in-parens": ["error", "never"],
    "space-unary-ops": "error",
    "space-before-function-paren": ["error", "never"],
    "no-multi-spaces": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "computed-property-spacing": ["error", "never"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 1 }],
    "space-infix-ops": "error",
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    /*"linebreak-style": [
      "error",
      "unix"
    ],*/
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "arrow-spacing": [
      "error"
    ],
    "max-len": ["error", 130],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0,

  }
};

