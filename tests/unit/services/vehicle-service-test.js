import { expect, assert } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { setupTest } from 'ember-mocha';
import startMirage from 'ember-app/tests/helpers/start-mirage';
import Ember from 'ember';


describe('Unit | Service | vehicle service', function() {
    setupTest('service:vehicle-service', {
        setup() {
            startMirage(this.container);
        },
        afterEach() {
            server.shutDown();
        }
    });
  
    it('exists', function() {
        let service = this.subject();
        expect(service).to.be.ok;
    });

    it('should be able to run get vehicles', function(done){

        let mockedModel = server.createList('vehicle', 20);
        var stub = sinon.stub();
        stub.resolves(mockedModel);
        
        let service = this.subject({
            store: {
                findAll: stub
            }
        });
    
        service.getVehicles().then(function (value) {
            assert.equal(value.length, 20); 
            done();
        });
    });

    it('should be able to run get vehicle', function(done){

        let id = 1000;
        var mockedModel = server.create('vehicle', { id: id, vehicleMovementId: id});

        var stub = sinon.stub();
        stub.resolves(mockedModel.toJSON());

        let service = this.subject({
            store: {
                findRecord: stub
            }
        });

        service.getVehicle(id).then(function (result) {
            assert.equal(result.vehicleMovementId, id); 
            done();
        });
    });


});
