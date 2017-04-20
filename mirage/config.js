import Mirage from 'ember-cli-mirage';

export default function() {
    this.urlPrefix = 'http://localhost:8081';
    this.namespace = '';
    

    this.get('vehicles', ({vehicles}, request) => {
        let filter = request.queryParams.make;
        if (filter!=undefined) {
            let filteredVehicles = vehicles.where(function(v) {
                return v.make.toLowerCase().includes(filter.toLowerCase());
            });
            
            return new Mirage.Response(200, {},filteredVehicles);
        }
        else {
            return new Mirage.Response(200, {}, vehicles.all());
        }
    });

    this.get('/vehicles/:id', ({ vehicles }, request) => {
        let id = request.params.id;
        let result =  vehicles.find(id);
        if (result) {
            return new Mirage.Response(200, {},result);
        }
        else {
            return new Mirage.Response(404, {}, {
                "errors": [
                     {"message": "Vehicle not found"}
                ]
            });

        }
    });

    // this.get('vehicles', ({ vehicles }, request) => {
    //     let filter = request.queryParams.make;
    //     if (filter!=undefined) {
    //         let filteredVehicles = vehicles.where(function(v) {
    //             return v.make.toLowerCase().includes(filter.toLowerCase());
    //         });
            
    //         return filteredVehicles;
    //     }
    //     else {
    //         return vehicles.all();
    //     }
    // });



    //this.get('vehicles/:id');

}

