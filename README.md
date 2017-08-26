# Bitnation Pangea

This is the repository for the Pangea Jurisdiction frontend. 


## Table of Contents

- [Building](#building)
- [Testing](#testing)
- [Commands](#commands)
- [Folder Structure](#folder-structure)
- [Development Guidelines](#development-guidelines)


## Building

We use docker for development, so make sure that you get the latest version (should be at least 17.04).

Setup instructions:
1. Clone the repository
2. Run ```docker-compose up -d```to build and start all the containers (wil take a few minutes).
3. Run ```docker-compose exec pangea bash``` to enter into the "pangea" container (it's the container where node is running).
4. Run ```npm install``` to get all the dependencies.
5. Run ```npm run start-native``` and wait 2 - 4 minutes. A QR-Code should be printed.
6. Now you just need to scan the QR-Code using the [Expo app](https://expo.io/) while connected in the same network as your computer.

### Tips and tricks
* Stop the containers ```docker-compose stop```
* Destroy the containers ```docker-compose down```


## Testing

You can test the mobile app without cloning the repo and/or building the app yourself.
You can just download the Expo app to your phone: https://expo.io/

Then go to [this](https://expo.io/@danielfranca/bitnation) page and scan the QR-Code using the [Expo app](https://expo.io/).

Easy as that, now you can test the app on your phone.

## Commands

`start-native`: Start mobile app

`ios`: Run app on IOS simulator

`android`: Run app on Android simulator

`eject-native`: Eject Native project

`test-native`: Run mobile app tests

`start`: Start webserver

`build`: Build and watch app

`test`: Run web app tests

`eject`: Eject project


## Folder structure

The folder structure is as follwoing:
- src
  - actions: The action creators
  - components: [Stateless functional components](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc), only UI logic
  - containers: [React Components](https://facebook.github.io/react/docs/react-component.html) including business logic
  - images: Icons/images
  - reducers: Reducers Redux functions
  - services: API wrappers
  - styles: css and js stylesheets

## Development Guidelines

  We are following the [Airbnb Guidelines](https://github.com/airbnb/javascript)
  
  There is already a *.eslint.json* file containing the specifications, you just need to integrate it on your favorite editor.
