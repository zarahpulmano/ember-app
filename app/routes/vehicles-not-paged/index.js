import Ember from 'ember';

export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),

    model(params) {
        return this.get('vehicleService').getVehiclesByParameters(params);
     },

    setupController(controller, model) {
		controller.set('vehicles', model);
        Ember.run.scheduleOnce('afterRender', this, function() {
            controller.subscribeToPushStream();
        });
    },

    resetController(controller, isExiting, transition) {
        controller.unsubscribeFromPushStream();
    },
});