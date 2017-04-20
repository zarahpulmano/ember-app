import Ember from 'ember';


export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),

    model(params) {
        return this.get('vehicleService').getVehicle(params.id);
    },

    actions: {
        error (error) {
            console.log('Routing error: ' + JSON.stringify(error));
            this.transitionTo('vehicle-not-found');
        }
    }
});
