# Bitnation Pangea

> Pangea is a fullstack blockchain jurisdiction. It's created by BITNATION, the world's first Decentralized Borderless Voluntary Nation (DBVN). This reposity contains the ios/android interface.

## Table of Contents

- [Building](#building)
- [Commands](#commands)
- [Folder Structure](#folder-structure)
- [Development Guidelines](#development-guidelines)
- [Git Workflow](#git-workflow)
- [Testing](#testing)

## Building

We use docker for development, so make sure that you get the latest version (should be at least 17.04).

Setup instructions:
1. Clone the repository
2. Run ```docker-compose up -d```to build and start all the containers (wil take a few minutes).
3. Run ```docker-compose exec pangea bash``` to enter into the "pangea" container (it's the container where node is running).
4. Run ```npm install``` to get all the dependencies.
5. Run ```npm run android``` or ```npm run ios``` this will packager and application in `development` mode on your connected device

### Tips and tricks
* Stop the containers ```docker-compose stop```
* Destroy the containers ```docker-compose down```

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
