import Mirage from 'ember-cli-mirage';

export default function() {
    this.urlPrefix = 'http://localhost:8081';
    this.namespace = '';
    
    this.get('vehicles', ({ vehicles }, request) => {
        let filter = request.queryParams.make;
        if (filter!=undefined) {
            let filteredVehicles = vehicles.where(function(v) {
                return v.make.toLowerCase().includes(filter.toLowerCase());
            });
            
            return filteredVehicles;
        }
        else {
            return vehicles.all();
        }
    });

    this.get('vehicles/:id');

}

