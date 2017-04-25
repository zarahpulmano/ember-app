import Ember from 'ember';

export default function destroyApp(application) {
  Ember.run(application, 'destroy');
  
  if(server) {
    server.shutdown();
  }
  
  if(window.server) {
    window.server.shutdown();
  }
}
