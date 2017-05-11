import { expect } from 'chai';
import { describe, it } from 'mocha';
import { classHelper } from 'ember-app/helpers/class-helper';

describe('Unit | Helper | class helper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = classHelper(42);
    expect(result).to.be.ok;
  });
});

