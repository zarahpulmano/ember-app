import Ember from 'ember';
import PaginationMixin from 'ember-app/mixins/pagination'

export default Ember.Component.extend(PaginationMixin, {
    list: [],
    currentPage: 0,
    totalPages: 0,

    init() {
        this._super(...arguments);
    },
    
    didReceiveAttrs() {
        this._super(...arguments);

        let list = this.get('list');
        this.set('list',list);
    }

});
