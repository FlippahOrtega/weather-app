import React, { Component } from 'react';

import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import {DisplayMapClass} from './DisplayMapClass';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
    <DisplayMapClass />
    );
  }
}

export default withAuthenticator(App, true);
