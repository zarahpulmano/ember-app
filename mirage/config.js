import Mirage from 'ember-cli-mirage';

export default function() {
    this.urlPrefix = 'http://localhost:8081';
    this.namespace = '';
    
    this.get('vehicles', ({ vehicles }, request) => {
        let filter = request.queryParams.make;
        let result = [];
        if (filter!=undefined) {
            let filteredVehicles = vehicles.where(function(v) {
                return v.make.toLowerCase().includes(filter.toLowerCase());
            });
            result = filteredVehicles;
        }
        else {
            result =  vehicles.all();
        }

        //paginate
        if (request.queryParams["page[number]"] && request.queryParams["page[size]"]) {
            
            let pageNumber = Number(request.queryParams["page[number]"]);
            let pageSize = Number(request.queryParams["page[size]"]);
            result.totalPages = Math.ceil(result.models.length / pageSize);
            result.page = pageNumber;
            result.perPage = pageSize;

            let fromIndex = (pageNumber - 1) * pageSize;
            let vehiclesForCurrentPage = result.models.splice(fromIndex, pageSize);

            result.models = vehiclesForCurrentPage;
        }
        
        return result;
    });

    this.get('vehicles/:id');

}

