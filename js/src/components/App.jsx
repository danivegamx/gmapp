import React from 'react';
import Header from './Header.jsx';
import Title from './Title.jsx';
import Search from './Search.jsx';
import Map from './Map.jsx';
import CurrentLocation from './CurrentLocation.jsx';
import LocationList from './LocationList.jsx';
import Footer from './Footer.jsx';
import FavoritesStore from '../stores/FavoritesStore';
import MapStore from '../stores/MapStore';
import AppActions from '../actions/AppActions';

function getMapState() {
	return {
		favorites: FavoritesStore.getFavorites(),
		currentLocation: MapStore.getAddress(),
		mapCoordinates: MapStore.getMapCoordinates()
	}
}

/* Main Component */
export default class App extends React.Component {
	/*
	*	React-required;
	*	Constructor Method.
	*/
	constructor(props) {
		super(props)
		this.state = {
			favorites: FavoritesStore.getFavorites(),
			currentLocation: MapStore.getAddress(),
			mapCoordinates: MapStore.getMapCoordinates()
		}
	}

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
	}

	componentDidMount(){
		FavoritesStore.addChangeListener(this._onChange);
		MapStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		FavoritesStore.removeChangeListener(this._onChange);
		MapStore.removeChangeListener(this._onChange);
	}

	/*
	*	TODO React-required;
	*	Method to render all the components.
	*	@return jsxViewController
	*/
	render() {
		return (
			<div>
				<Header />
				<main className="row">
					<section className="map-wrapper medium-10 columns">
						<Search onSearch={this.searchForAddress} />
						<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
					</section>
					<section className="favorite-wrapper medium-2 columns">
						<div className="current-wrapper">
							<div className="current-title">My Current Location:</div>
							<div className="current-content">
								<CurrentLocation address={this.state.currentLocation} favorite={this.isAddressInFavorites(this.state.currentLocation)} onFavoriteToggle={this.toggleFavorite} />
							</div>
						</div>
						<div className="favorite-list-wrapper">
							<LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentLocation} onClick={this.searchForAddress} />
						</div>
					</section>
				</main>
				<Footer />
			</div>
		);
	}

	/*
	*	TODO Search a location from an address;
	*	Method to call the GMap service to search the
	*	coordinates from a given address.
	*	@param address
	*/
	searchForAddress(address) {
		//debugger
		AppActions.searchAddress(address);
	}

	toggleFavorite(address) {
		FavoritesStore.checkifFavorites(address)
		if(FavoritesStore.getIfItsOnFavorites()) {// If address is on favorites, remove it.
			AppActions.removeFromFavorites(address)
		}
		else { // If address is NOT on favorites, add it.
			AppActions.addToFavorites(address)
		}
	}

	_onChange(){
		this.state = getMapState();
	}
}
