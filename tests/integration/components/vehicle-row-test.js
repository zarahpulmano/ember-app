import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const pushStreamStub = Ember.Service.extend({
    pushstream: true,
    sendMessage() {
        
    }
});


describe('Integration | Component | vehicle row', function() {
  setupComponentTest('vehicle-row', {
      integration: true
  });

 beforeEach(function() {
      this.register('service:pushstream-service', pushStreamStub);
      this.inject.service('pushstream-service');
  });


  it('renders', function() {    
      this.render(hbs`{{vehicle-row}}`);
      expect(this.$()).to.have.length(1);
  });

  it('should expect bid amount to be displayed properly', function() {

    let vehicle = Ember.Object.create({
        bidAmount:500,
        id: 5
     });

      this.set('vehicle', vehicle);
      this.render(hbs`{{vehicle-row vehicle=vehicle}}`);
      expect(this.$('.bidAmount').text()).to.equal('$500');
      //this.$('.bidButton').click();
      //expect(this.$('.bidAmount').text()).equals('Bid Amount: $500');
  });

});
