/* Imports */
var React = require('react');

var CurrentLocation = React.createClass({

	/*
	*	TODO Toggle address in favorites list;
	*	Method to handle the addres on the properties from the app.
	*/
	toggleFavorite() {
		this.props.onFavoriteToggle(this.props.address);
	},

	/*
	*	TODO React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		var starClassName="icon-star-empty toggle-favorite-button"; // Add to favorites CTA, NO.

		if(this.props.favorite){
			starClassName = "icon-star-full toggle-favorite-button" // Add to favorites CTA, YES.
		}

		return (
			<div className="current-location">
				<span id="save-location">{this.props.address}</span>
				<span className={starClassName} onClick={this.toggleFavorite}></span>
			</div>
		);
	}
});

module.exports = CurrentLocation;