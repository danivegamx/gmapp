var React = require('react');

var Header = React.createClass({

	/*
	*	TODO React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		return (
			<header>
				<span className="appTitle">
					<strong>GMapp</strong> service built in React.js </span>
			</header>
		);
	}
});

module.exports = Header;
