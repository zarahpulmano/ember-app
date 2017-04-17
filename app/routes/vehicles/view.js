import Ember from 'ember';
import {VehicleList} from '../../utilities/common.strings';
import {Vehicle} from '../../utilities/vehicle-helper';

export default Ember.Route.extend({
     model(params) {
        return new Ember.RSVP.Promise(function(resolve){
            setTimeout(function(){ 
                var vehicleFound = VehicleList.filter(function(v) {
                    return parseInt(v.vehicle_id) === parseInt(params.vehicle_id)
                });
                var model = null;
                if (vehicleFound.length>0) {
                    let v = vehicleFound[0];
                    let m = Vehicle.create({
                        vehicleId:v.vehicle_id,
                        vehicleData:v.vehicle_data
                    });
                    model = m;
                }
                resolve(model);
            }, 5000);
        });
    }
});
