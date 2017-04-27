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
        handlePageBottom() {
            console.log('hello');
        }
    }
});