/* Imports */
import React from 'react';

export default class CurrentLocation extends React.Component{

	/*
	*	Toggle address in favorites list;
	*	Method to handle the addres on the properties from the app.
	*/
	toggleFavorite() {
		debugger
		this.props.onFavoriteToggle(this.props.address);
	}

	/*
	*	React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		let starClassName="icon-star-empty toggle-favorite-button"; // Add to favorites CTA, NO.
		if (this.props.favorite) {
			starClassName = "icon-star-full toggle-favorite-button" // Add to favorites CTA, YES.
		}

		return (
			<div className="current-location">
				<span id="save-location">{this.props.address}</span>
				<span className={starClassName} onClick={this.toggleFavorite.bind(this)}></span>
			</div>
		);
	}
}
