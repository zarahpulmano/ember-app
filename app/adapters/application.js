import DS from 'ember-data';

//make application default to making requests to the namespace of /api
export default DS.RESTAdapter.extend({
    host: "http://localhost:8081"
});
