import React, { Component } from 'react';

import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class Main extends Component {
  render() {
    return (
      <div className="App">
        hola otra prueba 
      </div>
    );
  }
}

export default Main;
