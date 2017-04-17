import Ember from 'ember';
import {VehicleList} from '../utilities/common.strings';
import {VehicleTest, Vehicle} from '../utilities/vehicle-helper';

export default Ember.Route.extend({
    model() {      
        //return this.store.findAll("vehicle");

        //async
        return new Ember.RSVP.Promise(function(resolve){

            $.ajax({
                type: "GET",
                url: "http://localhost:8081/vehicles"
            }).then(function(response) {
                resolve(response.vehicles);
            });
        });

        //sync
        // var vehicles = [];
        //         VehicleList.forEach(function(v) {
        //             let m = Vehicle.create({
        //                 vehicleId:v.vehicle_id,
        //                 vehicleData:v.vehicle_data
        //             });
                    
        //             vehicles.push(m);
        //         });
        // resolve(vehicles);
    }
});


