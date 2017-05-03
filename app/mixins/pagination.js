import Ember from 'ember';

export default Ember.Mixin.create({
    queryParams: ['page', 'size'],
    size: 20,
    page: 1 
});
