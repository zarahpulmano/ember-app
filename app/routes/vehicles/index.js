import Ember from 'ember';

export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),

    model(params) {
        return this.get('vehicleService').getVehiclesByParameters(params);
        
     },

    setupController(controller, model) {
        controller.set('vehicles', model);
    },

     queryParams: {
        page: {
            refreshModel: true
        },
        size: {
            refreshModel: true
        }
     },

    actions: {
        filterByMake(make) {
            if (make.length>0) {
                return this.get('vehicleService').getVehiclesByMake(make);
            } else {
                return this.get('vehicleService').getVehicles();
            }
        },

        pageChanged(current, previous) {
            this.transitionTo('vehicles', { queryParams: { page: current   }});
        }
    }
});