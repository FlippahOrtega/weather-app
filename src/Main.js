import React, { Component } from 'react';

import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class Main extends Component {
	async componentDidMount() {
		const credentials = await (await Auth.currentSession()).getIdToken().getJwtToken();
		console.log('crendeciales', credentials);
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log('Latitude is :', position.coords.latitude);
			console.log('Longitude is :', position.coords.longitude);

			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
				Headers: { 'Access-Control-Allow-Origin': '*' },
			};

			fetch(
				`https://tmb3ecnknb.execute-api.us-east-1.amazonaws.com/Prod/weather/api/weather/1.0/report.json?product=observation&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&oneobservation=true`,
				requestOptions
			)
				.then((response) => response.text())
				.then((result) => console.log('resultt', result))
				.catch((error) => console.log('error', error));
		});
	}
	render() {
		return <div className="App">hola otra prueba un nuevo deploy</div>;
	}
}

export default Main;
