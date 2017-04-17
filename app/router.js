import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('vehicles',function(){
      //add nested route
  });

  this.route('vehicle',  { path: 'vehicles/:vehicle_id' });

  this.route('transportation-dashboard');
  this.route('sales-dashboard');

  this.route('vehicle-not-found');

  this.route('cars');
  this.route('first');
  this.route('second');

  this.route('page-not-found', {path: '/*wildcard'});
  this.route('test-route');
});

export default Router;
