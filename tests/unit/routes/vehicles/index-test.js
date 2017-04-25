import { expect, assert } from 'chai';
import { describe, it, beforeEach, afterEach, before } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';

const vehicleServiceStub = Ember.Service.extend({
});

describe('Unit | Route | vehicles/index', function() {

    setupTest('route:vehicles/index', {
        unit: true,
        needs: ['service:vehicle-service']
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
                    getVehicles: spy
                }
            });

            route.model();          
            assert.ok(spy.called, "should call getVehicles")
            assert.ok(spy.calledOnce, "should call getVehicles once");
        });
    })

    describe('Actions', function() {

        it('filterByMake should call getVehicles if filter is null', function(){

            let getVehiclesSpy = sinon.spy();
            let getVehiclesByMakeSpy = sinon.spy();

            let route = this.subject({
                vehicleService: {
                    getVehicles: getVehiclesSpy,
                    getVehiclesByMake: getVehiclesByMakeSpy
                }
            });

            route.send('filterByMake','');
            assert.isOk(getVehiclesSpy.called);
            assert.isNotOk(getVehiclesByMakeSpy.called);
        });

        it('filterByMake should call getVehiclesByMake if filter is not null', function(){

            let getVehiclesSpy = sinon.spy();
            let getVehiclesByMakeSpy = sinon.spy();

            let route = this.subject({
                vehicleService: {
                    getVehicles: getVehiclesSpy,
                    getVehiclesByMake: getVehiclesByMakeSpy
                }
            });

            route.send('filterByMake','make');
            assert.isOk(getVehiclesByMakeSpy.called);
            assert.isNotOk(getVehiclesSpy.called);
        });
    })

});
