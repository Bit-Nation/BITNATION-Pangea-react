# Bitnation Pangea

> Pangea is a fullstack blockchain jurisdiction. It's created by BITNATION, the world's first Decentralized Borderless Voluntary Nation (DBVN). This reposity contains the ios/android interface.

## Table of Contents

- [Project Setup](#project-setup)
- [Commands](#commands)
- [Folder Structure](#folder-structure)
- [Development Guidelines](#development-guidelines)
- [Git Workflow](#git-workflow)
- [Testing](#testing)

## Project Setup

1. Get [node](https://nodejs.org/en/) (LTS)
2. Clone this project
3. Run `npm install`
4. Run `npm run ios` or `npm run android` to start your project in the simulator

## Commands

`start`: Start web app in development mode

`ios`: Run app on IOS simulator

`android`: Run app on Android simulator

`build`: Build and watch app

`test`: Run app tests

`test:watch`: Run app tests with live watching files

`test:coverage` Run tests and create coverage directory with information about code test coverage


## Folder structure

The folder structure is as follwoing:
- src
  _mocks_: Folder with mocks needed in tests
  _tests_: Application tests
  - actions: The action creators
  - components: [Stateless functional components](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc), only UI logic
  - containers: [React Components](https://facebook.github.io/react/docs/react-component.html) including business logic
  - images: Icons/images
  - reducers: Reducers Redux functions
  - services: API wrappers
  - styles: css and js stylesheets
  - configureStore.js: Return new redux store
  - index.js: Main web application file
  - index.mobile.js: Main mobile application file

## Development Guidelines

  We are following the [Airbnb Guidelines](https://github.com/airbnb/javascript)
  
  There is already a *.eslintrc.json* file containing the specifications, you just need to integrate it on your favorite editor.

## Git Workflow
We are using [this](http://nvie.com/posts/a-successful-git-branching-model/) branching model.

### Permanent Branches:

- master (protected, contains last release)
- development (protected, current development status)

### Commits
* A commit message should look like this `[git] added .idea to .gitignore`. Make sure that you add a "topic", e.g. `[git]`.
* Don't make monster commits (commits that contain e.g. 1000 changes in 70 files).

### Branch naming
* Features: `feature/<feature-name-and-or-issue-number>`.
* Fix: `fix/<issue-id>`.
* Hotfix: `hotfix/<issue-id>`.

### Pull Request Proccess
1. Write tests for the code you added.
2. Make sure the the CI pass.
3. Create your pull request.
4. Request a reviewer (yes, the project the core team too please).

## Testing
