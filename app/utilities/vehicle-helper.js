import Ember from 'ember';

// Computed properties, by default, 
// observe any changes made to the properties 
// they depend on and are dynamically updated when they're called. 

export const Vehicle = Ember.Object.extend({
    vehicleId: 0,
    vehicleData: null,
    vehicleTitle: Ember.computed('vehicleData.make', 'vehicleData.model', 'vehicleData.trim', function() {
        return `${this.get('vehicleData.make')} ${this.get('vehicleData.model')} ${this.get('vehicleData.trim')}`;
    }),
    vehicleTitleChanged: Ember.observer('vehicleTitle', function() {
        Ember.run.once(this, 'processVehicleTitleChange');
    }),
    imagePath: Ember.computed('vehicleData.image',function(){
        return `/images/${this.get('vehicleData.image')}`;
    }),
    bidAmount: 0,
    processVehicleTitleChange () {
    }
});

export const VehicleHelper = Ember.Object.extend({
    vehicleId: 0,
    vehicleData: null,
    vehicleTitle: Ember.computed('vehicleData.make', 'vehicleData.model', 'vehicleData.trim', function() {
        return `${this.get('vehicleData.make')} ${this.get('vehicleData.model')} ${this.get('vehicleData.trim')}`;
    }),
    vehicleTitleChanged: Ember.observer('vehicleTitle', function() {
        Ember.run.once(this, 'processVehicleTitleChange');
    }),
    imagePath: Ember.computed('vehicleData.image',function(){
        return `/images/${this.get('vehicleData.image')}`;
    }),
    bidAmount: 0,
    processVehicleTitleChange () {
    }
});

export const Light = Ember.Object.extend({
  isOn: false
});