import Ember from 'ember';

export default Ember.Component.extend({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    displayedPages: 10,
    pageRoute: '',
    totalPages:Ember.computed('itemsPerPage','totalItems',function(){
        let itemsPerPage = this.get('itemsPerPage');
        let totalItems = this.get('totalItems');
        return Math.ceil(totalItems/itemsPerPage);
    }).readOnly(),
    hasPages: Ember.computed.gt('totalPages',0).readOnly(),
    pages:Ember.computed('totalPages','currentPage','displayedPages',function(){
        
        let currentPage = this.get('currentPage');
        let displayedPages = this.get('displayedPages');
        let totalPages = this.get('totalPages');

        //offset from current page
        let offset = Math.ceil(displayedPages/2);

        //determine first and last index that will be displayed
        let firstIndex = currentPage - offset;
        let lastIndex = currentPage + (offset - 1);

        if (firstIndex < 1) {
            firstIndex = 1;
            lastIndex = firstIndex + (displayedPages-1);
            
            if (lastIndex > totalPages) {
                lastIndex = totalPages;
            }
        }
        else if (lastIndex > totalPages) {

            lastIndex = totalPages;
            firstIndex = totalPages - (displayedPages -1);

            if (firstIndex < 1) { 
                firstIndex = 1;
            }
        }

        let pageArraySize = (totalPages > displayedPages) ? displayedPages : totalPages;
        let pages = new Array(pageArraySize);

        for (var i =0; i<pageArraySize; i++) {
            pages[i] = i+firstIndex;
        }

        return pages;
    }).readOnly(),
    previousPage:Ember.computed('currentPage',function(){
        let currentPage = this.get('currentPage');
        if (currentPage > 1) {
            return currentPage - 1
        }
        else {
            return currentPage;
        }
    }).readOnly(),
    nextPage:Ember.computed('totalPages','currentPage',function(){
        let currentPage = this.get('currentPage');
        let totalPages = this.get('totalPages');
        if (currentPage < totalPages) {
            return currentPage + 1
        }
        else {
            return totalPages;
        }
    }).readOnly(),


    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {
        this._super(...arguments);
    }

});
