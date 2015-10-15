var React = require('react'),
	GMaps = require('gmaps');

var Map = React.createClass({

	/*
	*	TODO React-required;
	*	Method to handle render.
	*/
	componentDidMount() {
		this.componentDidUpdate();
	},

	/*
	*	TODO React-required;
	*	Method to handle render update.
	*/
	componentDidUpdate() {
		
		if(this.lastLat == this.props.lat && this.LastLng == this.props.lng)
			return;

		this.lastLat = this.props.lat;
		this.lastLng = this.props.lng;

		var map = new GMaps({
			el: '#map',
			lat: this.props.lat,
			lng: this.props.lng
		});

		map.addMarker({
			lat: this.props.lat,
			lng: this.props.lng
		});
	},

	/*
	*	TODO React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		return (<div id="map"></div>);
	}
});

module.exports = Map;