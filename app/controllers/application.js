import Ember from 'ember';
export default Ember.Controller.extend({
    pushstreamService: Ember.inject.service('pushstream-service'),

    init() {
        this._super(...arguments);
        let pushstreamService = this.get('pushstreamService');
        // let channel = pushstreamService.get('channel');
        // pushstreamService.connect(channel);

        // Ember.run.scheduleOnce('afterRender', this, function() {
        //     let channel = pushstreamService.get('channel');
        //     pushstreamService.connect(channel);
        // });
    }
});
