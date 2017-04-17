import Ember from 'ember';

export default Ember.Route.extend({
    //  beforeModel() {
    //     this.replaceWith('vehicles');
    //     //this.transitionTo('vehicles');
    // }
    redirect(model, transition) {
        this.replaceWith('vehicles');
    }
});