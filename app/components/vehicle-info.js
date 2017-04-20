import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
    },
    
    actions: {
        toggleImage() {
            this.toggleProperty('zoom');
        }
    }
});
