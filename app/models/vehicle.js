import DS from 'ember-data';
const { Model, attr } = DS;

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
  zipcode: DS.attr('number')
});