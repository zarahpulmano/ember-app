import Ember from 'ember';
import PaginationMixin from 'ember-app/mixins/pagination'
export default Ember.Controller.extend(PaginationMixin, {
    applicationController: Ember.inject.controller("application"),
    pushstreamService: Ember.inject.service('pushstream-service'),
    pageRoute: Ember.computed('applicationController.currentPath', function(){
        return this.get('applicationController.currentPath');
    }),
    vehicles: null,
    
    subscribeToPushStream() {

        console.log('subscribe to onmessage vehicles paged');
        let self = this;
        self._super(...arguments);
        let pushstreamService = this.get('pushstreamService');
        pushstreamService.on('onmessage', Ember.run.bind(this, this.handleServiceOnMessage));
    },

    unsubscribeFromPushStream() {
        console.log('turning off subscription vehicles');
        let pushstreamService = this.get('pushstreamService');
        pushstreamService.off('onmessage');
    },

    handleServiceOnMessage(message) {
        console.log('Received Paged Controller ', JSON.stringify(message));
        let self = this;
        let vehicleMovementId = parseInt(message.vehicleMovementId);
        let bidAmount = parseInt(message.amount);
        let bidder = message.bidder;
        let bidderAvatar = message.bidderAvatar;
        if (bidderAvatar.length == 0) {
            bidderAvatar="http://localhost:8081/images/avatarPlaceholder.png"
        }

        let vehicles = self.get('vehicles');
        let vehicle = vehicles.findBy('vehicleMovementId',vehicleMovementId);
        if (vehicle) {
            vehicle.set('bidAmount',bidAmount);
            vehicle.set('bidder',bidder);
            vehicle.set('bidderAvatar',bidderAvatar);
        }
    }
});
