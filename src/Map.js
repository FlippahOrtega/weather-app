import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
const Map = (props) => {
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{
				lat: parseFloat(props.stateParent.lat),
				lng: parseFloat(props.stateParent.long),
			}}
		/>
	);
};

export default withScriptjs(withGoogleMap(Map));
