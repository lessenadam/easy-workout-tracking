import Ember from 'ember';

export default Ember.Controller.extend({
    isTypeOfWorkoutSelected: Ember.computed.notEmpty('typeOfWorkout'),

    typeOfWorkout: null,

    actions: {
        selectWorkout(workoutId) {
            console.warn(workoutId);
            this.set('typeOfWorkout', workoutId);
        }
    }
});
