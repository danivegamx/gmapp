var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter  = require('events').EventEmitter,
    AppConstants  = require('../constants/AppConstants'),
    _ = require('underscore'),
    GMaps = require('gmaps');

var _address = "Paris, France",
    _mapCoordinates = {lat:48.856614,lng:2.3522219};

function searchAddress(address) {
  // GMaps geocode:
    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        //debugger
        if(status !== 'OK') return;
        var latlng = results[0].geometry.location;

        _address = results[0].formatted_address;
        _mapCoordinates = {lat: latlng.lat(),lng: latlng.lng()}
        MapStore.emitChange(); // Once executed the callback, emit the change.
      }
    });
}

// Extend FavoritesStore with EventEmitter to add eventing capabilities
var MapStore = _.extend({}, EventEmitter.prototype, {

  getAddress: function() {
    return _address;
  },
  getMapCoordinates: function() {
    return _mapCoordinates;
  },
  // Emit Change event
  emitChange: function() {
    //debugger
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
    // Respond to SEARCH_ADDRESS action
    case AppConstants.SEARCH_ADDRESS:
      searchAddress(action.address);
      break;

    default:
      return true;
  }

  return true;

});

module.exports = MapStore;
