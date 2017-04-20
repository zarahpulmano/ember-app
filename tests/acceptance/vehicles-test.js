import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect, assert} from 'chai';
import startApp from 'ember-app/tests/helpers/start-app';
import destroyApp from 'ember-app/tests/helpers/destroy-app';

describe('Acceptance | vehicles', function() {
  let application;

  beforeEach(function() {
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

  it('displays Page Header Vehicles For Auction', function() {
    visit('/vehicles');

    return andThen(() => {
        let element = find("#title");
        assert.equal(element.text(), 'Ember Application');
        assert.equal(element.prop("tagName"), 'H2');

    });
  });

  it('can display list of vehicles', function() {
    server.createList('vehicle', 10); 

    visit('/vehicles');

    return andThen(() => {
      assert.equal(find(".vehicle-row").length, 10);
    });
  });
});
