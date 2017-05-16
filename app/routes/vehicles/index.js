import Ember from 'ember';

export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),

    model(params) {
        return this.get('vehicleService').getVehiclesByParameters(params);
     },

    setupController(controller, model) {
		controller.set('vehicles', model);
        controller.subscribeToPushStream();
    },

    resetController(controller, isExiting, transition) {
        controller.unsubscribeFromPushStream();
    },
});