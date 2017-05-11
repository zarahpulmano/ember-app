import Ember from 'ember';

export default Ember.Mixin.create({
    queryParams: ['page'],
    size: 20,
    page: 1
});
