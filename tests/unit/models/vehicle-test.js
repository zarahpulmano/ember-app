import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | vehicle', function() {
  setupModelTest('vehicle', {
      needs: []
  });

  // Replace this with your real tests.
  it('exists', function() {
    let model = this.subject();
    // var store = this.store();
    expect(model).to.be.ok;
  });
  
  it('should have an attribute: make', function(){
      let model = this.subject();
      let hasAttr = Object.keys(model.toJSON()).indexOf('make') > -1;
      assert.isTrue(hasAttr, 'Model has make attribute');
  });

});


