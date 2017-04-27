import { expect, assert } from 'chai';
import { describe, it, before, after, beforeEach, afterEach} from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import Ember from 'ember';
import startMirage from 'ember-app/tests/helpers/start-mirage';
import hbs from 'htmlbars-inline-precompile';

describe('Unit | Component | vehicle list filter', function() {
  setupComponentTest('vehicle-list-filter', {
    unit: true,
    needs: []
  });

  it('filterVehicle should updated filteredVehicles property', function(done) {
    
    let input = "Test Make";
  
    //let callback = sinon.spy();
    let component = this.subject();
    let filterStub = sinon.stub().resolves(input);
    let spy = sinon.spy(component,'filterVehicleCallback');

    component.set('value',input);
    component.set('filter',filterStub);
    
    //call function
    component.send('filterVehicles');
    
    setTimeout(function(){
        assert.equal(input,component.get('filteredVehicles'),"should update property with return of the filter method");
        assert.ok(spy.called, "should call filterVehicleCallback method");
        done();
    }, 1500)
  });
  
});
