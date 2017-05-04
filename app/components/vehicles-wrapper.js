import Ember from 'ember';

export default Ember.Component.extend({
    pushstreamService: Ember.inject.service('pushstream-service'),
    
    init() {
        this._super(...arguments);
    },
    
    didReceiveAttrs() {
        this._super(...arguments);
    },

    didInsertElement(){
        console.log('vehicle wrapper inserted');
        
        let pushstreamService = this.get('pushstreamService');
        Ember.run.scheduleOnce('afterRender', this, function() {
            let channel = pushstreamService.get('channel');
            pushstreamService.connect(channel);
        });
    },
    
    willDestroyElement(){

    }
});
