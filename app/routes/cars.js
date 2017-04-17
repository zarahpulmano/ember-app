import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll("vehicle");
    },
    
    renderTemplate() {
        
        this.render();

        this.render('first', {
            into: 'cars',
            outlet: 'first'
        });

        this.render('second', {
            into: 'cars',
            outlet: 'second'
        });

    }

});
