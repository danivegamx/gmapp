
var React = require('react'),
	Header = require('./Header'),
	Title = require('./Title'),
	Search = require('./Search'),
	Map = require('./Map'),
	CurrentLocation = require('./CurrentLocation'),
	LocationList = require('./LocationList'),
	Footer = require('./Footer'),
	FavoritesStore = require('../stores/FavoritesStore'),
	MapStore = require('../stores/MapStore'),
	AppActions = require('../actions/AppActions');


function getMapState() {
	return {
		favorites: FavoritesStore.getFavorites(),
		currentLocation: MapStore.getAddress(),
		mapCoordinates: MapStore.getMapCoordinates()
	}
}

/* Main Component */
var App = React.createClass({

	/*
	*	TODO Check if current addres is on favorites;
	*	Method to check if the current address is already
	*	on the favorites list.
	*	@param address
	*	@return boolean
	*/
	isAddressInFavorites(address) {
		FavoritesStore.checkifFavorites(address)
		return FavoritesStore.getIfItsOnFavorites();
	},
	componentDidMount(){
		this.componentDidUpdate();
	},
	componentDidUpdate() {
		FavoritesStore.addChangeListener(this._onChange);
		MapStore.addChangeListener(this._onChange);
	},
	/*
	*	TODO React-required;
	*	Method to set the initial state for the app.
	*/
	getInitialState() {
		return getMapState();
	},

	/*
	*	TODO React-required;
	*	Method to render all the components.
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
	*	@param address
	*/
	searchForAddress(address) {
		AppActions.searchAddress(address);
	},

	toggleFavorite(address) {
		FavoritesStore.checkifFavorites(address)
		if(FavoritesStore.getIfItsOnFavorites()) // If address is on favorites, remove it.
			AppActions.removeFromFavorites(address)
		else // If address is NOT on favorites, add it.
			AppActions.addToFavorites(address)
	},
	_onChange(){
		this.setState(getMapState());
	}
});

module.exports = App; // Export module to global usage.