import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
    pushstream:null,
    channel:'auction',

    init() {
        this._super(...arguments);
        
        console.log('init service');
        let pushstream = new PushStream({
            host: 'ec2-34-209-179-208.us-west-2.compute.amazonaws.com',
            modes: "websocket|eventsource|stream"
        });
        
        pushstream.onmessage = Ember.run.bind(this, this.manageEvent);
        pushstream.onstatuschange = Ember.run.bind(this, this.statusChanged);
        this.set("pushstream",pushstream);

        this.connect(this.get('channel'));
    },

    manageEvent(eventMessage) {
        if (eventMessage != '') {
          var values = $.parseJSON(eventMessage);
          this.trigger('onmessage',values);
        }
    },

    statusChanged(state) {
        if (state === PushStream.OPEN) {
            console.log('pushstream connected');
        } else {
            console.log('pushstream disconnected');
        }
    },

    connect(channel){
        let pushstream = this.get('pushstream');
        if (pushstream) {
            pushstream.removeAllChannels();
            try {
                pushstream.addChannel(channel);
                pushstream.connect();
                console.log('connect to push stream');
            } catch(e) {
                console.log('error connecting '+ e);
            };
            
        }
    },

    sendMessage(message,callback,callbackParams) {

        let pushstream = this.get('pushstream');
        pushstream.sendMessage(message, callback);
    }
    
});
