import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect, assert} from 'chai';
import startApp from 'ember-app/tests/helpers/start-app';
import destroyApp from 'ember-app/tests/helpers/destroy-app';

describe('Acceptance | vehicles', function() {
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

  it('can visit /vehicles', function() {
    visit('/vehicles');

    return andThen(() => {
      assert.equal(currentURL(), '/vehicles');
    });
  });

  it('renders page header', function() {
    visit('/vehicles');

    return andThen(() => {
        let element = find("#title");
        assert.equal(element.text(), 'Ember Application');
        assert.equal(element.prop("tagName"), 'H2');

    });
  });

  it('renders list of vehicles', function() {
      server.createList('vehicle', 10); 

      visit('/vehicles');

      return andThen(() => {
        assert.equal(find(".vehicle-row").length, 10);
      });
  });

    it('it has link to /vehicles/1000', function() {
      server.createList('vehicle', 10); 

      visit('/vehicles');

      return andThen(() => {
          assert.equal(find("#vehicle-1000").find(".vehicle-link").prop("href"), 'http://localhost:7357/vehicles/1000');
      });
  });

  it('it can visit /vehicles/1000', function() {
      server.createList('vehicle', 10); 

      visit('/vehicles');
      click('#vehicle-1000 a');

      andThen(() => {
          assert.equal(currentURL(), '/vehicles/1000');
      });
  });
  
});
