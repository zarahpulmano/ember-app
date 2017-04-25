import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    init() {
        this._super(...arguments);
    },

    helloWorld() {
        return 'Hello World';
    },
    
    getVehicles() {
        let store = this.get('store');
        return new Ember.RSVP.Promise(function(resolve, reject) {
            store.findAll('vehicle')
            .then(function(result) {
                resolve(result);
            }).catch(function(error) {
                reject(error);
            });
        });
    },

    getVehicle(id) {
        let store = this.get('store');
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (id) {
                store.findRecord('vehicle', id)
                .then(function(result) {
                    if (result) {
                        resolve(result);
                    }
                    else {
                        reject({"message" : "Could not find vehicle."});
                    }
                }).catch(function(error) {
                    reject(error);
                });
            }
            else {
                reject({"message" : "Vehicle id is required."});
            }
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
