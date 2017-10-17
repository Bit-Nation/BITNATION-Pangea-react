import './shim';
import React, { Component } from 'react';
import * as panthalassa from 'panthalassa-ts';
import Main from './src/index.mobile';

console.log(panthalassa);

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Main />
    );
  }
}
