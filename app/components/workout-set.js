import Ember from 'ember';

export default Ember.Component.extend({
    workoutTranslator: Ember.inject.service('workout-translator'),

    type: null,

    index: null,

    count: Ember.computed('index', function() {
        return this.get('index') + 1;
    }),

    workoutVarieties: Ember.computed('type', function() {
        const workoutTranslator = this.get('workoutTranslator');
        const type = this.get('type');
        return workoutTranslator.getVarietiesForType(type);
    }),

    workoutValues: Ember.computed('type', function() {
        const workoutTranslator = this.get('workoutTranslator');
        const type = this.get('type');
        return workoutTranslator.getValuesForType(type);
    }),

    actions: {
        removeSet() {
            const index = this.get('index');
            this.sendAction('removeSet', index);
        }
    }

});
