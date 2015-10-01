var React = require('react');

var Search = React.createClass({

	/*
	*	TODO React-required;
	*	Method to set the initial state for the component.
	*/
	getInitialState() {
		return {value: ''};
	},

	/*
	*	TODO Set state to the new location;
	*	Method to set the state once triggered wth the new location
	*	to be shown on the map.
	*
	*	@param event
	*/
	handleChange(event) {
		this.setState({value: event.target.value});
	},

	/*
	*	TODO Handle FORM tag with an event;
	*	Method to handle the form, get the addres from the input and
	*	delegate the text to the GMap service.
	*
	*	@param event
	*/
	handleSubmit(event) {
		event.preventDefault();

		this.props.onSearch(this.state.value);

		this.getDOMNode().querySelector('input').blur();
	},

	/*
	*	TODO React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		return (
			<form id="geocoding_form" className="form icon-location" onSubmit={this.handleSubmit}>
				<input type="text" className="input" id="address" placeholder="Find a location..." onChange={this.handleChange} />
			</form>
		);
	}
});

module.exports = Search;