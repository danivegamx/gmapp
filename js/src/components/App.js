/* Imports */
var React = require('react');
var Header = require('./Header');
var Title = require('./Title');
var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');
var Footer = require('./Footer');

/* Main Component */
var App = React.createClass({

	/*
	*	TODO Add current location to favorites;
	*	Method to remove an address from favorites list.
	*
	*	@param address
	*/
	addToFavorites(address) {
		var favorites = this.state.favorites; // Get favorite list from state.

		favorites.push({ // Add address and timestamp to favorites array.
			address: address,
			timestamp: Date.now()
		});

		this.setState({ // Dirty state. Regenerate new state with updated favorites list.
			favorites: favorites
		});

		localStorage.favorites = JSON.stringify(favorites); // Put list on local storage.
	},

	/*
	*	TODO React-required;
	*	Method to set the initial state for the app.
	*/
	getInitialState() {
		var favorites = []; // Initialize favorites with an empty array.

		if(localStorage.favorites) {  // If favorites exists, asign array to previous var.
			favorites = JSON.parse(localStorage.favorites)
		}

		return { // Default: Paris' coordinates.
			favorites: favorites,
			currentLocation: "Paris, France",
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},

	/*
	*	TODO Check if current addres is on favorites;
	*	Method to check if the current address is already
	*	on the favorites list.
	*
	*	@param address
	*	@return boolean
	*/
	isAddressInFavorites(address) {
		var favorites = this.state.favorites;

		for(var i = 0; i < favorites.length; i++)
			if(favorites[i].address == address)
				return true;

		return false;
	},

	/*
	*	TODO Remove current location to favorites;
	*	Method to remove an address from favorites list.
	*
	*	@param address
	*/
	removeFromFavorites(address) {
		var favorites = this.state.favorites; // Get favorites list from state.
		var index = -1;

		// Look for the addres in favorites.
		for (var i = 0; i < favorites.length; i++)
			if(favorites[i].address == address) {
				index = i;
				break;
			}

		// If found, remove it.
		if(index !== -1) {
			favorites.splice(index, 1);

			this.setState({ // Update status.
				favorites: favorites
			});

			localStorage.favorites = JSON.stringify(favorites); // Save favorites list.
		}
	},

	/*
	*	TODO React-required;
	*	Method to render all the components.
	*
	*	@return jsxViewController
	*/
	render() {
		return (
			<div>
				<Header />
				<div className="row">
					<Title />
					<div className="map-wrapper medium-8 columns">
						<Search onSearch={this.searchForAddress} />
						<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
					</div>
					<div className="favorite-wrapper medium-4 columns">
						<div className="current-wrapper">
							<div className="current-title">Current Location:</div>
							<div className="current-content">
								<CurrentLocation address={this.state.currentLocation} favorite={this.isAddressInFavorites(this.state.currentLocation)} onFavoriteToggle={this.toggleFavorite} />
							</div>
						</div>
						<div className="favorite-list-wrapper">
							<LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentLocation} onClick={this.searchForAddress} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	},

	/*
	*	TODO Search a location from an address;
	*	Method to call the GMap service to search the
	*	coordinates from a given address.
	*
	*	@param address
	*/
	searchForAddress(address) {
		var self = this;

		// GMaps geocode:
		GMaps.geocode({
			address: address,
			callback: function(results, status) {
				if(status !== 'OK') return;
				var latlng = results[0].geometry.location;

				self.setState({
					currentLocation: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
			}
		});
	},

	/*
	*	TODO Toggle address in favorites list;
	*	Method to toggle a specific address into favorites list.
	*
	*	@param address
	*/
	toggleFavorite(address) {
		if(this.isAddressInFavorites(address)) // If address is on favorites, remove it.
			this.removeFromFavorites(address);
		else // If address is NOT on favorites, add it.
			this.addToFavorites(address);
	}
});

module.exports = App; // Export module to global usage.
