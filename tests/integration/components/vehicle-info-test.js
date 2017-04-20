import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | vehicle info', function() {
  setupComponentTest('vehicle-info', {
    integration: true
  });

  it('renders', function() {
    
    this.render(hbs`{{vehicle-info}}`);
    expect(this.$()).to.have.length(1);
  });
});
