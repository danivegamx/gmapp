import React from 'react';

export default class Footer extends React.Component {

	/*
	*	TODO React-required;
	*	Method to render the component.
	*	@return jsxViewController
	*/
	render() {
		return (
			<footer className="footer">
				<figure>
					<img src="../images/d.jpg"/>
				</figure>
				<span className="foot-note"><strong>@danivegamx <span>2017</span></strong></span>
			</footer>
		);
	}
}
