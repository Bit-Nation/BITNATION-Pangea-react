# Bitnation Pangea

This is the repository for the Pangea Jurisdiction frontend. 


## Table of Contents

- [Building](#building)
- [Testing](#testing)
- [Commands](#commands)
- [Folder Structure](#folder-structure)
- [Development Guidelines](#development-guidelines)


## Building

After clone the repository you can run
`npm install` to install all dependencies
and then `npm run start-native`
It should print a QR-Code.

Now you just need to scan the QR-Code using the [Expo app](https://expo.io/) while connected in the same network as your computer.

## Testing

You can test the mobile app without cloning the repo and/or building the app yourself.
You can just download the Expo app to your phone: https://expo.io/

Then go to [this](https://expo.io/@danielfranca/bitnation) page and scan the qr-code.

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
