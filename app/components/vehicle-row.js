import Ember from 'ember';

export default Ember.Component.extend({
    pushstreamService: Ember.inject.service('pushstream-service'),
    vehicle: null,
    
    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {
        this._super(...arguments);
    },

    didRender() {
        let self = this;
        let service = this.get('pushstreamService');

        service.on('onmessage', function(message) {
            self.handleServiceOnMessage(message);
        }); 
    },

    handleServiceOnMessage(message) {
        console.log('Received' + JSON.stringify(message));
        let vehicleId = this.get('vehicle.vehicleMovementId');
        if (message.vehicleMovementId == vehicleId) {
            this.set('vehicle.bidAmount',message.amount)
        }
    },

    clickBidCallback() {
        this.$('.bidButton').prop('disabled',false);
    },

    actions: {

        clickBid(id, bidAmount) {
            let self = this;
            let service = this.get('pushstreamService');
            let updatedBid = (bidAmount?parseInt(bidAmount): 0) + 500;            
            let message = '{"vehicleMovementId":"'+id+'","amount":"'+updatedBid+'"}';

            //actions
            this.$('.bidButton').prop('disabled',true);

            if (service.pushstream) {
                service.sendMessage(message,self.clickBidCallback.bind(self));
            }

        }
    }
});
