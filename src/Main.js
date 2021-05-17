import React, { Component } from 'react';

import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class Main() extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default withAuthenticator(Main, true);
