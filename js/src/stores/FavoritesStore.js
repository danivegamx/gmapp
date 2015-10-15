var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var AppConstants  = require('../constants/AppConstants');
var _ = require('underscore');

var _favorites = [],
	_isOnFavorite = false; // Initialize favorites with an empty array.

function checkFavorites(address) {
	var favorites = [];
	if(localStorage.favorites) {  // If favorites exists, asign array to previous var.
		favorites = JSON.parse(localStorage.favorites)
	}

	for(var i = 0; i < favorites.length; i++)
		if(favorites[i].address == address)
			_isOnFavorite = true;
		else
			_isOnFavorite = false;
	return _isOnFavorite;
}

function addToFavorites(address) {
	var favorites = _favorites; // Get favorite list from state.
		
	favorites.push({ // Add address and timestamp to favorites array.
		address: address,
		timestamp: Date.now()
	});

	_favorites = favorites;

	localStorage.favorites = JSON.stringify(_favorites);
}

function removeFromFavorites(address) {
	var favorites = _favorites; // Get favorites list from state.
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

		_favorites = favorites;

		localStorage.favorites = JSON.stringify(_favorites); // Save favorites list.
	}
}

// Extend FavoritesStore with EventEmitter to add eventing capabilities
var FavoritesStore = _.extend({}, EventEmitter.prototype, {

  getFavorites: function() {
  	if(localStorage.favorites) {  // If favorites exists, asign array to previous var.
		_favorites = JSON.parse(localStorage.favorites)
	}
    return _favorites;
  },
  getAddress: function() {
  	
    return _address;
  },
  getMapCoordinates: function() {
    return _mapCoordinates;
  },
  getIfItsOnFavorites: function() {
  	return _isOnFavorite;
  },
  checkifFavorites: function(address) {
	var favorites = [];
	if(localStorage.favorites) {  // If favorites exists, asign array to previous var.
		favorites = JSON.parse(localStorage.favorites)
	}

	for(var i = 0; i < favorites.length; i++)
		if(favorites[i].address == address) {
			_isOnFavorite = true;
			break;
		}
		else
			_isOnFavorite = false;
  },
  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    // Respond to CHECK_IF_ITS_ON_FAVORITES action
    case AppConstants.CHECK_IF_ITS_ON_FAVORITES:
      checkFavorites(action.address);
      break;

    // Respond to ADD_TO_FAVORITES action
    case AppConstants.ADD_TO_FAVORITES:
      addToFavorites(action.address);
      break;

    // Respond to REMOVE_FROM_FAVORITES action
    case AppConstants.REMOVE_FROM_FAVORITES:
      removeFromFavorites(action.address);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  FavoritesStore.emitChange();

  return true;

});

module.exports = FavoritesStore;