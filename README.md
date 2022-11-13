[![Automated E2E Testing](https://github.com/Jenfer93/social-media-client-jenfer/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Jenfer93/social-media-client-jenfer/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/Jenfer93/social-media-client-jenfer/actions/workflows/unittest.yml/badge.svg)](https://github.com/Jenfer93/social-media-client-jenfer/actions/workflows/unittest.yml)
[![Deploy static content to Pages](https://github.com/Jenfer93/social-media-client-jenfer/actions/workflows/pages.yml/badge.svg)](https://github.com/Jenfer93/social-media-client-jenfer/actions/workflows/pages.yml)

# Workflow CA - Jenny Feragen

In this CA we are learning how to set up tests for a application - to help us better the process of coding.
The application is not my own, I've borrowed a Noroff Social Media App project.

## Get started

First of all:
Download the repo and set it up at a destination of your choosing. Then open the code in you prefered editor.
Mine is VSCode.

Initialize git in the project folder:

```
git init
```

Install dependencies

```
npm i
```

Build SASS

```
npm run build
```

The site is setup to be viewed in Vite, to do so run:

```
npm run dev
```

Follow the link to view the site

## Tests

I have set up some unit tests and they are:

- Login test
- Logout test
- Create post test

To run these tests use the command:

```
npm run test-unit
```

The End to End tests I have set up is:

- Login test with valid credentials
- Logout test
- Create post

To test these in Cypress use the command:

```
npm run test-e2e
```

To run these tests in the terminal use the command:

```
npm run test-e2e-cli
```

## What does this project include?

I've added these code formatters:

- Prettier
- Eslint

To have them format on save you have to do the following:

Install Prettier

```
npm i -D prettier
```

Add Script to `package.json`

```json
scripts {
  "format": "prettier -w src/**/*.js",
}
```

Install eslint

```
npm i -D eslint
```

setup eslint with the following settings:

```
npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Add scripts:

```json
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

If you like the code formatters to work pre-commit add a hook:

```
npx mrm@2 lint-staged
```

Replace the default lint-staged script with this:

```json
"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
```

There should also be a .vscode folder containing a file called settings.json, add this is the file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```

## Unit testing

For the unit-testing I've used Jest
To set this up I did the following:

Install Jest.

```
npm i -D jest@29.2.0
```

Add the Jest script to `package.json`

```json
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix",
    "test-unit": "npm run test",
    "test": "jest",
}
```

To have eslint work correctly with jest I've installed eslint plugin for Jest.

```
npm i -D eslint-plugin-jest
```

Update `.eslintrc.json` settings.

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": {
        "jest/prefer-expect-assertions": "off",
        "no-undef": "off",
        "no-unused-vars": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

We should also install Babel:

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Then create a ´babel.config.json´ file and add the following:

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

I then added the pre-commit hook for Jest in the folder `.husky` and file `pre-commit`:

```
npm run test-unit
```

## End 2 End testing

For the e2e tests we're using Cypress

Install Cypress

```
npm i -D cypress@10.7.0
```

We need to update the scripts to include Cypress, it will look like this:

```json
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix",
    "test-unit": "npm run test & npm run test-e2e",
    "test": "jest",
    "test-e2e": "cypress open",
    "test-e2e-cli": "cypress run"
}
```

Open Cypress by using the command

```
npm run test-e2e
```

WHen the Cypress window opens, choose the E2E Testing option, accept configurations and select Electron to get to the testing stage.
After doing this there should have been added a folder for Cypress to you repo.
And a file called `cypress.config.js`
In the folder there might be some example files, these can be deleted and replaced with your own test files.

We also need to add the Eslint plugin for Cypress:

```
npm i -D eslint-plugin-cypress@2.12.1
```

Update the eslint override settings in the `.eslintrc.json` file to look like this:

```json
 "overrides": [
    {
      "files": ["**/*.cy.js", "cypress.config.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off",
        "no-undef": "off"
      }
    },
    {
      "files": ["**/*.test.js"],
      "env": { "jest/globals": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": {
        "jest/prefer-expect-assertions": "off",
        "no-undef": "off",
        "no-unused-vars": "off"
      }
    }
  ],
```
