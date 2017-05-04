import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
    pushstream:null,
    channel:'auction',

    init() {
        this._super(...arguments);

        //setup push stream
        console.log('service init');

        //PushStream.LOG_LEVEL = 'debug';
        let pushstream = new PushStream({
            host: 'ec2-34-209-179-208.us-west-2.compute.amazonaws.com',
            modes: "websocket|eventsource|stream"
        });
        
        pushstream.onmessage = this.manageEvent.bind(this);
        pushstream.onstatuschange = this.statusChanged.bind(this);

        this.set("pushstream",pushstream);
    },

    connect(channel){

        let pushstream = this.get('pushstream');
        if (pushstream) {
            pushstream.removeAllChannels();
            try {
                pushstream.addChannel(channel);
                pushstream.connect();

            } catch(e) {
                console.log('error connecting '+ e);
            };
            
        }
    },

    manageEvent(eventMessage) {
        if (eventMessage != '') {
          var values = $.parseJSON(eventMessage);
          this.trigger('onmessage',values);
        }
    },

    statusChanged(state) {
        //console.log('onstatuschange ' + state);
    },

    sendMessage(message,callback,callbackParams) {

        let pushstream = this.get('pushstream');
        pushstream.sendMessage(message, callback);
    }
    
});
