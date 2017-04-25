import { expect, assert } from 'chai';
import { describe, it, before, after, beforeEach, afterEach} from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import startMirage from 'ember-app/tests/helpers/start-mirage';
import hbs from 'htmlbars-inline-precompile';

describe('Unit | Component | vehicle info', function() {
  setupComponentTest('vehicle-info', {
      unit: true,
      needs: []
  });


    beforeEach(function() {
        if(server==undefined) {
            startMirage();
        }
    });

    afterEach(function() {
        if (server!=undefined) {
            server.shutdown();
        }
    });

  it('renders', function() {    
      this.render(hbs`{{vehicle-info}}`);
      assert.equal(this.$().length, 1);
  });

  it('should display info correctly', function() {
    let id = 1000;
    let mockedModel = server.create('vehicle', { id: id, vehicleMovementId: id});        
    let vehicle = mockedModel.toJSON();
    let vehicleTitle = vehicle.location;
    var component = this.subject({
        model: vehicle
    });
    this.render(hbs`{{vehicle-info}}`);
    assert.equal(this.$('.vehicle-location').text(), "Location: " + vehicle.location);
  });

});
