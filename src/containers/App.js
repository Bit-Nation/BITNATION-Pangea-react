import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/App.css';
import {APP_STATUS} from '../constants/status_types';
import { connect } from 'react-redux';
import {startApp} from '../actions/core'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(startApp());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bitnation</h2>
          <h3>The Internet of Sovereignty</h3>
        </div>
        <p className="App-intro">
          {this.props.appStatus === APP_STATUS.INACTIVE && "Inactive..."}
          {this.props.appStatus === APP_STATUS.STARTING && "Starting..."}
          {this.props.appStatus === APP_STATUS.RUNNING && "Working!"}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appStatus: state.core.appStatus
})

export default connect(mapStateToProps)(App)
