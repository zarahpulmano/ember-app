import Ember from 'ember';

export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),
    errorRoute: 'vehicle-not-found',

    model(params) {
        return this.get('vehicleService').getVehicle(params.id);
    },

    handleError () {
        this.transitionTo(this.get('errorRoute'));
    },

    actions: {
        error (error) {
            this.handleError();
        }
    }
});
