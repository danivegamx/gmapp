var React = require('react');

var Footer = React.createClass({

	/*
	*	TODO React-required;
	*	Method to render the component.
	*	@return jsxViewController
	*/
	render() {
		return (
			<footer className="footer">
				<span className="foot-note"><strong>Daniel Vega, 2015</strong></span>
			</footer>
		);
	}
});

module.exports = Footer;