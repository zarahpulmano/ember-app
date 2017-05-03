import Ember from 'ember';

export default Ember.Route.extend({
    vehicleService: Ember.inject.service(),

    model(params) {
        var param = {
            page: {
                number: params.page,
                size: params.size
            }
        }
        
        return this.get('vehicleService').getVehiclesByParameters(param);
        
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
            console.log('oi');
            if (make.length>0) {
                return this.get('vehicleService').getVehiclesByMake(make);
            } else {
                return this.get('vehicleService').getVehicles();
            }
        },

        pageChanged(current, previous) {
            //console.log(current, previous);
            this.transitionTo('vehicles-paged', { queryParams: { page: current   }});

        }
    }
});


