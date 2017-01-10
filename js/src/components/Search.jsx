import React from 'react';
import AppActions from '../actions/AppActions.js';

export default class Search extends React.Component {

	/*
	*	React-required;
	*	Constructor Method to set the initial state for the component.
	*/
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value: ''};
	}

	/*
	*	TODO Set state to the new location;
	*	Method to set the state once triggered wth the new location
	*	to be shown on the map.
	*	@param event
	*/
	handleChange(event) {
		//debugger
		AppActions.searchAddress(event.target.value);
	}

	/*
	*	Handle FORM tag with an event;
	*	Method to handle the form, get the addres from the input and
	*	delegate the text to the GMap service.
	*	@param event
	*/
	handleSubmit(event) {
		//debugger
		event.preventDefault();
		this.props.onSearch(this.state.value);
		//document.querySelector('#adress').blur();
	}

	/*
	*	TODO React-required;
	*	Method to render the component.
	*	@return jsxViewController
	*/
	render() {
		return (
			<form id="geocoding_form" className="form" onSubmit={this.handleSubmit}>
				<input type="text" className="input" id="address" placeholder="Find a location..." onChange={this.handleChange} />
			</form>
		);
	}
}
