import Ember from 'ember';
export default Ember.Controller.extend({
    pushstreamService: Ember.inject.service('pushstream-service'),

    init() {
        this._super(...arguments);
        let pushstreamService = this.get('pushstreamService');

        Ember.run.scheduleOnce('afterRender', this, function() {
            console.log('connect to push stream');
            let channel = pushstreamService.get('channel');
            pushstreamService.connect(channel);
        });
    }
});
