import Ember from 'ember';

export default Ember.Controller.extend({
    bidAmount: 0,
    
    actions: {
        bid() {  
            this.incrementProperty('bidAmount',500);
        }
    }
});
