import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import PaginationMixin from 'ember-app/mixins/pagination';

describe('Unit | Mixin | pagination', function() {
  // Replace this with your real tests.
  it('works', function() {
    let PaginationObject = Ember.Object.extend(PaginationMixin);
    let subject = PaginationObject.create();
    expect(subject).to.be.ok;
  });
});
