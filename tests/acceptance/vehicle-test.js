import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect, assert} from 'chai';
import startApp from 'ember-app/tests/helpers/start-app';
import destroyApp from 'ember-app/tests/helpers/destroy-app';

describe('Acceptance | vehicle', function() {
  let application;

  beforeEach(function() {
    if (server!=undefined) {
        server.shutdown();
    }
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /vehicles/:id for a valid vehicle', function() {

    server.loadFixtures('vehicles'); 
    visit('/vehicles/20000');

    return andThen(() => {
      assert.equal(currentURL(), '/vehicles/20000');
    });
  });

  it('displays correct information for vehicle', function() {

    server.loadFixtures('vehicles'); 
    visit('/vehicles/20000');

    return andThen(() => {
      assert.equal(currentURL(), '/vehicles/20000');
      assert.equal($('.vehicle-title').text(), "1995 Nissan Pathfinder 4WD V8, Turbo Dsl 6.4L");
      assert.equal(find(".inspected").length, 1);
      assert.equal($('.vehicle-location').text(), "Location: Tracy CA");
      assert.equal($('.vehicle-color').text(), "Color: Blue");
      assert.equal($('.vehicle-mileage').text(), "Mileage: 91064");
      assert.equal($('.vehicle-asking').text(), "Asking Price: 5995");
    });
  });


  it('goes to vehicle-not-found page if vehicle not found', function() {
      server.createList('vehicle', 10); 

      visit('/vehicles/10002');

      return andThen(() => {
          assert.equal(currentURL(), '/vehicle-not-found');
      });
  });


});
