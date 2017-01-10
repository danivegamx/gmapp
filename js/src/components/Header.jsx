import React from 'react';

export default class Header extends React.Component {

	/*
	*	React-required;
	*	Method to render the component.
	*
	*	@return jsxViewController
	*/
	render() {
		return (
			<header className="header">
				<figure>
					<img src="../../images/loc.svg"/>
				</figure>
				<span className="appTitle">
					<strong>Location Search</strong>
				</span>
			</header>
		);
	}
}
