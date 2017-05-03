import Ember from 'ember';

export default Ember.Component.extend({
    pages: [],
    currentPage: 0,
    totalPages: 0,
    pageRoute: '',
    pageLinkSize: 10,
    
    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {

        this._super(...arguments);
        
        let currentPage = this.get('currentPage');
        let totalPages = this.get('totalPages');
        let pageLinkSize = this.get('pageLinkSize');

        let offset = Math.round(pageLinkSize/2);
        let firstIndex = currentPage - offset;
        let lastIndex = currentPage + (offset - 1);

        if (firstIndex < 1) {
            firstIndex = 1;
            lastIndex = firstIndex + (pageLinkSize-1);
            
            if (lastIndex > totalPages) {
                lastIndex = totalPages;
            }
        }
        else if (lastIndex > totalPages) {

            lastIndex = totalPages;
            firstIndex = totalPages - (pageLinkSize -1);

            if (firstIndex < 1) { 
                firstIndex = 1;
            }
        }

        let pages = new Array(pageLinkSize)
        for (var i = firstIndex; i<(lastIndex+1); i++) {
            pages[i] = i;
        }

        if (pages.length > 0) {
            this.set('currentPage',currentPage);
            this.set('pages',pages);
        }
    }

});
