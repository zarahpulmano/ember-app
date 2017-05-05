import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  vehicleMovementId: DS.attr('number'),
  year: DS.attr('number'),
  make: DS.attr('string'),
  model: DS.attr('string'),
  trim: DS.attr('string'),
  color: DS.attr('string'),
  mileage: DS.attr('number'),
  askingPrice: DS.attr('number'),
  imageFile: DS.attr('string'),
  location: DS.attr('string'), 
  inspected: DS.attr('boolean'),
  kbb: DS.attr('number'),
  zipcode: DS.attr('number'),
  bidAmount: 0,
  bidder:'N/A',
  bidderAvatar:'',
  vehicleTitle: Ember.computed('year', 'make', 'model', 'trim', function() {
    return `${this.get('year')} ${this.get('make')} ${this.get('model')} ${this.get('trim')}`;
  })
});