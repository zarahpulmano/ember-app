import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        toggleImage() {
            this.toggleProperty('zoom');
        }
    }
});
