import { expect, assert } from 'chai';
import { describe, it, beforeEach, afterEach, before } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';

describe('Unit | Route | vehicle/index', function() {
  setupTest('route:vehicle/index', {
      needs: ['service:vehicle-service']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });

  it('error method should call handleError', function(){

    let route = this.subject({
      transitionTo(route) {
        return true;
      }
    });
    
    route.set('errorRoute','my-custom-route');
    let handleErrorSpy = sinon.spy(route,'handleError');
    let transitionToSpy = sinon.spy(route,'transitionTo');
    route.send('error','error');          
    assert.ok(handleErrorSpy.called, "should call handleError method");
    assert.ok(transitionToSpy.called, "should call transitionTo method");
    assert.ok(transitionToSpy.calledWith('my-custom-route'), "should call transitionTo with argument specified");
  });

  it('handleError should trigger Transition To', function(){
    
    //setup
    let route = this.subject({
      transitionTo(route) {
        return true;
      }
    });  
    route.set('errorRoute','my-custom-route');
    let transitionToSpy = sinon.spy(route,'transitionTo');

    //action
    route.handleError();

    //result
    assert.ok(transitionToSpy.called, "should call transitionTo method");
    assert.ok(transitionToSpy.calledWith('my-custom-route'), "should call transitionTo with argument specified");
  });
});
