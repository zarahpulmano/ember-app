import Ember from 'ember';
import DS from 'ember-data';
export default DS.RESTAdapter.extend({
    host: "http://localhost:8081",
    namespace: ''
});
