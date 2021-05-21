import React, { Component } from 'react';
import api from './api';
import './App.css';
import Map from './Map';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
const urlParameters = '/maps/api/js?v=3.exp&key=';

Amplify.configure(aws_exports);

class Main extends Component {
	state = {
		location: {},
		observations: {},
		feedCreation: {},
		lat: 0,
		long: 0,
		userData: {},
	};

	_writedata = () => {
		console.log('no porfavors');
	};

	componentDidMount = async () => {
		const credentials = await (await Auth.currentSession()).getIdToken().payload;
		console.log('crendeciales', credentials);
		navigator.geolocation.getCurrentPosition((position) => {
			//	console.log('Latitude is :', position.coords.latitude);
			//console.log('Longitude is :', position.coords.longitude);

			var requestOptions = {
				method: 'GET',
				redirect: 'follow',
				headers: { 'Access-Control-Allow-Origin': '*' },
			};
			let self = this;
			fetch(
				`https://tmb3ecnknb.execute-api.us-east-1.amazonaws.com/Prod/weather/api/weather/1.0/report.json?product=observation&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&oneobservation=true`,
				requestOptions
			)
				.then((response) => response.json())
				.then((result) => {
					console.log('Result', result);
					self.setState({
						location: result.observations.location[0],
						observations: result.observations.location[0].observation[0],
						feedCreation: result.feedCreation,
						lat: result.observations.location[0].latitude,
						long: result.observations.location[0].longitude,
						userData: credentials,
					});
				})
				.then(() => {
					var myHeaders = new Headers();
					myHeaders.append('Content-Type', 'application/json');

					var raw = JSON.stringify({
						uniqueUserId: credentials.aud,
						username: credentials.aud,
						Location: this.state.location,
						Timestamp: this.state.feedCreation,
					});

					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: raw,
						redirect: 'follow',
					};

					fetch('https://tmb3ecnknb.execute-api.us-east-1.amazonaws.com/Prod/SendUserData', requestOptions)
						.then((response) => response.text())
						.then((result) => console.log(result))
						.catch((error) => console.log('error', error));
				})
				.catch((error) => console.log('error', error));
		});
	};
	render() {
		if (this.state.long !== 0) {
			alert(`${this.state.observations.skyDescription} - ${this.state.observations.description}`);
			return (
				<div className="App">
					<Map
						googleMapURL={`${api.mapsUrl}/${urlParameters}${api.mapsKey}`}
						containerElement={<div style={{ height: '400px' }} />}
						mapElement={<div style={{ height: '90vh' }} />}
						loadingElement={<p>Cargando</p>}
						stateParent={this.state}
					></Map>
				</div>
			);
		} else {
			return <div className="App">Cargando mapa</div>;
		}
	}
}

export default Main;
