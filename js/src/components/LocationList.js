var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

	/*
	*	TODO React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		var self = this;

		var locations = this.props.locations.map(function(l){
			var active = self.props.activeLocationAddress == l.address;

			return <LocationItem address={l.address} timestamp={l.timestamp} active={active} onClick={self.props.onClick} />
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
});

module.exports = LocationList;