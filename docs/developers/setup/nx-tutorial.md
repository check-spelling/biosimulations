# Nx tutorial

This project uses [Nx](https://nx.dev). Below is a brief introduction to using Nx with this project.

## Generate a skeleton for an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a skeleton for a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

Libraries are sharable across libraries and applications. They can be imported as `@biosimulations/mylib`.

## Generate a skeleton for a component

Run `ng g component my-component --project=my-app` to generate a skeleton for a new component.

## Run a development server

Run `ng serve my-app` to run a development server. Then navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any of the source files.

## Run unit tests for an application or library

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by your recent changes.

## Run end-to-end tests for an application or library

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by your recent changes.

## Build an application

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Mapping the dependencies of the applications and libraries

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Cloud-based computation memoization

This project uses [Nx Cloud](https://nx.app/) to help developers save time when building and testing. Visit [Nx Cloud](https://nx.app/) to learn more.

## Further help

Below are several resources for additional help:

* [10-minute video which outlines the features of Nx](https://nx.dev/angular/getting-started/what-is-nx)
* [Interactive tutorial](https://nx.dev/angular/tutorial/01-create-application)
* [Documentation](https://nx.dev/angular)