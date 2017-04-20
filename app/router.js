import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vehicles',function(){

  });

  this.route('vehicle',  { path: 'vehicles/:id' }, function(){
    
  });

  this.route('transportation-dashboard');
  this.route('sales-dashboard');

  this.route('vehicle-not-found');

  this.route('page-not-found', {path: '/*wildcard'});
});

export default Router;
