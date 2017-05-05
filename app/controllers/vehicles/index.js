import Ember from 'ember';
import PaginationMixin from 'ember-app/mixins/pagination'
export default Ember.Controller.extend(PaginationMixin, {
    pushstreamService: Ember.inject.service('pushstream-service'),
    vehicles: null,
    filteredVehicles: Ember.computed('vehicles', 'page', function() {
        let vehicles = this.get('vehicles');
        let pageNumber = this.get('page');
        let pageSize = this.get('pageSize');
        let fromIndex = (pageNumber - 1) * pageSize;
        let toIndex = (fromIndex + pageSize)
        let vehiclesForCurrentPage = vehicles.slice(fromIndex, toIndex);
        return vehiclesForCurrentPage;
    }),

    subscribeToPushStream() {

        console.log('subscribe to onmessage vehicles paged');
        let self = this;
        self._super(...arguments);
        let pushstreamService = this.get('pushstreamService');
        pushstreamService.on('onmessage', function(message) {
            self.handleServiceOnMessage(message);
        });
    },

    unsubscribeFromPushStream() {
        console.log('turning off subscription vehicles');
        let pushstreamService = this.get('pushstreamService');
        pushstreamService.off('onmessage');
    },

    handleServiceOnMessage(message) {
        console.log('Received Paged Controller ', JSON.stringify(message));
        let self = this;
        Ember.run(function(){
            let vehicleMovementId = parseInt(message.vehicleMovementId);
            let bidAmount = parseInt(message.amount);
            let bidder = message.bidder;
            let bidderAvatar = message.bidderAvatar;
            if (bidderAvatar.length == 0) {
                bidderAvatar="http://localhost:4200/images/avatarPlaceholder.png"
            }

            let vehicles = self.get('vehicles');
            let vehicle = vehicles.findBy('vehicleMovementId',vehicleMovementId);
            if (vehicle) {
                vehicle.set('bidAmount',bidAmount);
                vehicle.set('bidder',bidder);
                vehicle.set('bidderAvatar',bidderAvatar);
            }
        });


    }

});
