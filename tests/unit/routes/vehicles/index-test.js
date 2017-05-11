import { expect, assert } from 'chai';
import { describe, it, beforeEach, afterEach, before } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';

const vehicleServiceStub = Ember.Service.extend({
});

describe('Unit | Route | vehicles/index', function() {

    setupTest('route:vehicles/index', {
        unit: true
    });

    beforeEach(function() {
        this.register('service:vehicle-service', vehicleServiceStub);
        this.inject.service('vehicle-service');
    });

    it('exists', function() {
        let route = this.subject();
        expect(route).to.be.ok;
    });


    describe('Model',function(){

        it('model should call getVehicles', function(){
            let spy = sinon.spy();
            let route = this.subject({
                vehicleService: {
                    getVehiclesByParameters: spy
                }
            });

            route.model();          
            assert.ok(spy.called, "should call getVehicles")
            assert.ok(spy.calledOnce, "should call getVehicles once");
        });
    })

});
