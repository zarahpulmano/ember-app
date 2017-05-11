import Ember from 'ember';
import PaginationMixin from 'ember-app/mixins/pagination'

export default Ember.Component.extend(PaginationMixin, {
    list: [],
    page: 1,
    size: 20,
    todosSorting: ['name'],
    filteredList: Ember.computed('size','list','page', function() {
        
        let list = this.get('list');
        let page = this.get('page');
        let size = this.get('size');
        let fromIndex = (page - 1) * size;
        let toIndex = (fromIndex + size)
        let listForCurrentPage = list.slice(fromIndex, toIndex);
        return listForCurrentPage;
    }),

    init() {
        this._super(...arguments);
    },
    
    didReceiveAttrs() {
        this._super(...arguments);
    },

    didRender() {
        
    }
});
