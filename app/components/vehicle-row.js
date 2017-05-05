import Ember from 'ember';

export default Ember.Component.extend({
    pushstreamService: Ember.inject.service('pushstream-service'),
    vehicle: null,
    bidButtonDisabled: false,
    
    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {
        this._super(...arguments);
    },
    
    beforeClickBid() {
        this.set('bidButtonDisabled',true)
    },

    clickBidCallback() {
        console.log('click bid callback');
        this.set('inputBid',"");
        this.set('bidButtonDisabled',false)
    },

    actions: {

        clickBid(id, oldBidAmount, newbidAmount) {

            this.beforeClickBid();

            let self = this;
            let service = this.get('pushstreamService');
            let bidderAvatar = 'http://localhost:8081/images/ember.png';
            let bidder = 'Ember';
            let oldBid = oldBidAmount? parseInt(oldBidAmount): 0;
            let updatedBid = newbidAmount ? parseInt(newbidAmount): 0;
            if(updatedBid == 0 || updatedBid<oldBid) {
                updatedBid = oldBid + 500;
            }
            
            let message = '{"vehicleMovementId":"'+id+'","amount":"'+updatedBid+'","bidder":"'+bidder+'","bidderAvatar":"'+bidderAvatar+'"}';
            
            if (service.pushstream) {
                //service.sendMessage(message,self.clickBidCallback.bind(self));
                service.sendMessage(message,Ember.run.bind(self, this.clickBidCallback));
            }
        }
    }
});
