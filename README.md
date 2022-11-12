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
