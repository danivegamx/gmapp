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
			<header className="header">
				<span className="appTitle">
					<strong>React.js Prototype</strong> built in React.js
				</span>
			</header>
		);
	}
});

module.exports = Header;
