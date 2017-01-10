import React from 'react';
import moment from 'moment';

export default class LocationItem extends React.Component {

	/*
	*	Method to handle the address on the properties from the app.
	*/
	handleClick() {
		this.props.onClick(this.props.address);
	}

	/*
	*	TODO React-required;
	*	Method to render the component.
	*	@return jsxViewController
	*/
	render() {
		var cn = "list-group-item";

		if(this.props.active) {
			cn += " active-location"
		}

		return (
			<a className={cn} onClick={this.handleClick}>
				{this.props.address}
				<div className="createdAt">{ moment(this.props.timestamp).fromNow() }</div>
			</a>
		)
	}
}
