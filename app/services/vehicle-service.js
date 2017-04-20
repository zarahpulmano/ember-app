import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    init() {
        this._super(...arguments);
    },

    runCallback(callback) {
        callback('foo');
    },
    
    getVehicles() {
        let store = this.get('store');
        return new Ember.RSVP.Promise(function(resolve, reject) {
            store.findAll('vehicle')
            .then(function(result) {
                console.log(result);
                resolve(result);
            }).catch(function(error) {
                reject(error);
            });
        });
    },

    getVehicle(id) {
        let store = this.get('store');
        return new Ember.RSVP.Promise(function(resolve, reject) {
            store.findRecord('vehicle', id)
            .then(function(result) {
                resolve(result);
            }).catch(function(error) {
                reject(error);
            });
        });
    },

    getVehiclesByMake(make) {
        let store = this.get('store');
        return new Ember.RSVP.Promise(function(resolve, reject) {
            store.query('vehicle', { make: make })
            .then(function(result) {
                resolve(result);
            }).catch(function(error) {
                reject(error);
            });
        });
    }

});
