import Ember from 'ember';
export default Ember.Controller.extend({
    pushstreamService: Ember.inject.service('pushstream-service'),
    vehicles: null,

    subscribeToPushStream() {

        console.log('subscribe to onmessage vehicles not paged');
        let self = this;
        self._super(...arguments);
        let pushstreamService = this.get('pushstreamService');
        pushstreamService.on('onmessage', function(message) {
            self.handleServiceOnMessage(message);
        });
    },

    unsubscribeFromPushStream() {
        console.log('turning off subscription vehicles not paged');
        let pushstreamService = this.get('pushstreamService');
        pushstreamService.off('onmessage');
    },

    handleServiceOnMessage(message) {
        console.log('Received Not Paged Controller ', JSON.stringify(message));
        let vehicleMovementId = parseInt(message.vehicleMovementId);
        let bidAmount = parseInt(message.amount);
        let bidder = message.bidder;
        let bidderAvatar = message.bidderAvatar;
        
        let vehicles = this.get('vehicles');
        let vehicle = vehicles.findBy('vehicleMovementId',vehicleMovementId);
        if (vehicle) {
            vehicle.set('bidAmount',bidAmount);
            vehicle.set('bidder',bidder);
            vehicle.set('bidderAvatar',bidderAvatar);
        }
    }

});
