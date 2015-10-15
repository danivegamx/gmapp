var AppDispatcher = require('../dispatcher/AppDispatcher'),
	AppConstants  = require('../constants/AppConstants')

// Define actions object.
var AppActions = {
	searchAddress: function(address) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SEARCH_ADDRESS,
			address: address
		});
	},
	checkIfItsOnFavorites: function(address) {
		AppDispatcher.handleAction({
			actionType: AppConstants.CHECK_IF_ITS_ON_FAVORITES,
			address: address
		});
	},
	addToFavorites: function(address) {
		AppDispatcher.handleAction({
			actionType: AppConstants.ADD_TO_FAVORITES,
			address: address
		});
	},
	removeFromFavorites: function(address) {
		AppDispatcher.handleAction({
			actionType: AppConstants.REMOVE_FROM_FAVORITES,
			address: address
		});
	}
}

module.exports = AppActions;