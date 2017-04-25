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
        filterByMake(make) {
            if (make.length>0) {
                return this.get('vehicleService').getVehiclesByMake(make);
            } else {
                return this.get('vehicleService').getVehicles();
            }
        }
    }
});


