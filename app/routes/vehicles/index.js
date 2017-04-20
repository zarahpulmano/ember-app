import Ember from 'ember';

export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),

    model() {
        return this.get('vehicleService').getVehicles();
     },

    setupController(controller, model) {
        controller.set('vehicles', model);
    },

    actions: {
        error (error) {
            console.log('Routing error: ' + JSON.stringify(error));
        },

        filterByMake(make) {
            if (make.length>0) {
                return this.get('vehicleService').getVehiclesByMake(make);
            } else {
                return this.get('vehicleService').getVehicles();
            }
        },

        bid() {
            this.incrementProperty('bidAmount',500);
        },

        testService() {

            this.get('vehicleService').getVehicles().then(function(value) {
                console.log(value); // Success!
            }, function(reason) {
                console.log(reason); // Error!
            });

        }
    }
});


