import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | vehicle not found', function() {
  setupComponentTest('vehicle-not-found', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{vehicle-not-found}}`);
    expect(this.$()).to.have.length(1);
  });
});
