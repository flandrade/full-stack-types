# Full Stack Types with TypeScript's Project References

[![Build Status](https://travis-ci.org/flandrade/full-stack-types.svg?branch=master)](https://travis-ci.org/flandrade/full-stack-types)

Simple server (express) and client (React) apps with shared types to ensure the
API contract. TypeScript's project reference is used to structure the project
into smaller packages. Based on [project-reference-demo](https://github.com/RyanCavanaugh/project-references-demo).

Here is the project structure:

```
/shared-types          Shared types for the API
  /tsconfig.json
/server                Server: express app. Depends on 'shared-types'
  /tsconfig.json
/client                Client: React app. Depends on 'shared-types'
  /tsconfig.json
/tsconfig.json         Solution file for the application
```

## Why not using npm packages?

- Build times improve
- Single build to compile all packages
- You don't have to change the package version to include recent changes
- Single base tsconfig
- No extra tool to manage the packages
- Ability to use incremental builds

For more information, see [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html).

## Getting started

### Clone the repository

### Install NVM and select the Node version

Install [nvm](https://github.com/creationix/nvm) to manage several Node versions.
After install, run the following commands in the project directory:

```
nvm install
nvm use
```

### Install dependencies

Run the following command to install the dependencies for every project:

```
npm install
npm install:all
```

### Build the projects

```
npm run build
```

## License
MIT
