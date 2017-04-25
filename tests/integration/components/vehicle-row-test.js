import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | vehicle row', function() {
  setupComponentTest('vehicle-row', {
      integration: true
  });

  it('renders', function() {    
      this.render(hbs`{{vehicle-row}}`);
      expect(this.$()).to.have.length(1);
  });

  it('should expect bid to increment by 500 on button click', function() {
      this.render(hbs`{{vehicle-row bidAmount=500}}`);
      expect(this.$('.bidAmount').text()).to.equal('Bid Amount: $500');
      this.$('button').click();
      expect(this.$('.bidAmount').text()).equals('Bid Amount: $1000');
  });

});
