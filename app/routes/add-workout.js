import Ember from "ember";

export default Ember.Route.extend({
    beforeModel() {
        this.replaceWith('add-workout.new');
    },

    model() {
        // boulder endurance, rope endurance, boulder power, isolation power, boulder power endurance, rope power endurnace
        return [
            {
                id: "boulder-endurance",
                title: "Boulder Endurance",
                abbreviatedTitle: "BE"
            },
            {
                id: "rope-endurance",
                title: "Rope Endurance",
                abbreviatedTitle: "RE"
            },
            {
                id: "boulder-power",
                title: "Boulder Power",
                abbreviatedTitle: "BP"
            },
            {
                id: "isolation-power",
                title: "Isolation Power",
                abbreviatedTitle: "IP"
            },
            {
                id: "boulder-power-endurance",
                title: "Boulder Power Endurance",
                abbreviatedTitle: "BPE"
            },
            {
                id: "rope-power-endurance",
                title: "Rope Power Endurance",
                abbreviatedTitle: "RPE"
            }
        ];
    },

    actions: {
        selectWorkout(workoutId) {
            console.warn(workoutId);
            this.transitionTo('add-workout.details', {
                queryParams: {
                    type: workoutId,
                    // showDetails: true
                }
            });
        }
    }
});
