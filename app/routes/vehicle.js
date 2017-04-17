import Ember from 'ember';
import {VehicleList} from '../utilities/common.strings';
import {Vehicle} from '../utilities/vehicle-helper';

export default Ember.Route.extend({
     model(params) {
        
        return this.store.findRecord('vehicle', params.vehicle_id);

        // return new Ember.RSVP.Promise(function(resolve){
        //     var url = "http://localhost:8081/vehicles/" + params.vehicle_id;
        //     $.ajax({
        //         type: "GET",
        //         url: url
        //     }).then(function(response) {
        //         resolve(response);
        //     });
        // });
    },

    actions: {
        error: function (error) {
            this.transitionTo('vehicle-not-found');
        }
    }
});
