import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
	render() {
		return <Main />;
	}
}

export default withAuthenticator(App, true);
