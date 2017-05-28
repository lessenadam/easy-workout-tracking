import Ember from "ember";

export default Ember.Route.extend({
    isTypeOfWorkoutSelected: false,

    model() {
        // boulder endurance, rope endurance, boulder power, isolation power, boulder power endurance, rope power endurnace
        return [
            {
                id: "boulder-endurance",
                title: "Boulder Endurance"
            },
            {
                id: "rope-endurance",
                title: "Rope Endurance"
            },
            {
                id: "boulder-power",
                title: "Boulder Power"
            },
            {
                id: "isolation-power",
                title: "Isolation Power"
            },
            {
                id: "boulder-power-endurance",
                title: "Boulder Power Endurance"
            },
            {
                id: "rope-power-endurance",
                title: "Rope Power Endurance"
            }
        ];
    }
});
