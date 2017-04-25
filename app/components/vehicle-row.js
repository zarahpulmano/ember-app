import Ember from 'ember';

export default Ember.Component.extend({
    vehicle: null,
    bidAmount: 0,

    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {
        this._super(...arguments);
        let bidAmount = this.get('bidAmount');
        if (bidAmount!=null) {
            this.set('bidAmount',bidAmount);
        }
    },

    actions: {
        clickBid() {
            this.incrementProperty('bidAmount',500);
        }
    }
});
