import { expect, assert } from 'chai';
import { describe, it, before, after, beforeEach, afterEach} from 'mocha';
import { setupTest } from 'ember-mocha';
import startMirage from 'ember-app/tests/helpers/start-mirage';
import Ember from 'ember';

describe('Unit | Service | vehicle service', function() {
   
    setupTest('service:vehicle-service', {
        unit: true,
        // needs: []
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

    it('exists', function() {
        let service = this.subject(); 
        expect(service).to.be.ok;
    });

    it('should get response from getVehicles', function(done){

        let mockedModel = server.createList('vehicle', 20);
        let stub = sinon.stub();
        stub.resolves(mockedModel);
        let service = this.subject({
            store: {
                findAll: stub
            }
        });
    
        service.getVehicles().then(function (response) {
            assert.equal(response.length, 20); 
            done();
        });

    });

    it('should require id param in getVehicle', function(done){

        let service = this.subject();
        service.getVehicle().catch(function(error){
            let message = error.message;
            assert.equal(message,'Vehicle id is required.','Should get error message');
            done();
        });
    });

    it('should get response from getVehicle', function(done){
        let id = 1000;
        let mockedModel = server.create('vehicle', { id: id, vehicleMovementId: id});        
        let stub = sinon.stub();
        stub.resolves(mockedModel.toJSON());

        let service = this.subject({
            store: {
                findRecord: stub
            }
        });

        service.getVehicle(id).then(function (result) {
            assert.equal(result.vehicleMovementId, id, 'vehicleMovementId of result should equal id param'); 
            done();
        });
    });



});
