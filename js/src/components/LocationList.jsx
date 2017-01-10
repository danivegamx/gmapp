import React from 'react';
import LocationItem from './LocationItem.jsx';

export default class LocationList extends React.Component {

	/*
	*	TODO React-required;
	*	Method to render the component.
	*	@return jsxViewController
	*/
	render() {
		var self = this;
		var index = 0;
		var locations = this.props.locations.map(function(l){
			var active = self.props.activeLocationAddress == l.address;

			return <LocationItem key={index++} address={l.address} timestamp={l.timestamp} active={active} onClick={self.props.onClick} />
		});

		if(!locations.length)
			return null;

		return (
			<div className="location-favorite-wrapper">
				<div className="location-favorite-title">Favorite Locations:</div>
				<div className="location-favorite-items">
					{locations}
				</div>
			</div>
		);
	}
}
