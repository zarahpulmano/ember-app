import Ember from 'ember';

export default Ember.Component.extend({
    vehicles: null,
    filteredVehicles: null,

    init() {
        this._super(...arguments);
    },
    
    didReceiveAttrs() {
        this._super(...arguments);
        let vehicles = this.get('vehicles');
        this.set('filteredVehicles',vehicles);
    },

    filterVehicleCallback(result) {
        this.set('filteredVehicles',result);
    },    
    
    actions: {
        filterVehicles() {
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            var self = this;

            filterAction(filterInputValue).then(function(results){
                self.filterVehicleCallback(results);
            });
        }
    }

});
