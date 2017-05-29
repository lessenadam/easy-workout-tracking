import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['type'],

    didTypeChange: Ember.observer('type', function() {
        this.set('workoutSets', []);
    }),

    currentWorkout: Ember.computed('type', function() {
        var currentType = this.get('type');
        return this.get('model').findBy('id', currentType);
    }),

    workoutSets: [],

    actions: {
        addSet() {
            console.warn('add new set');
            const currentSets = this.get('workoutSets');
            const newSets = currentSets.concat({
                values: []
            });
            this.set('workoutSets', newSets);
        }
    }
});
