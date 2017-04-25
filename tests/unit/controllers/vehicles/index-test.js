import { expect, assert } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Controller | vehicles/index', function() {
    setupTest('controller:vehicles/index', {

    });

    it('bid action should increment bid property by 500',function() {   
          let controller = this.subject();
          controller.set('bidAmount',500);
          controller.send('bid');
          let newBid = controller.get('bidAmount');
          assert.equal(newBid,1000,'bid should increment by 500');
    });

});
