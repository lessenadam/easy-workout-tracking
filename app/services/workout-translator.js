import Ember from 'ember';

export default Ember.Service.extend({
    varietiesByType: {
        'boulder-endurance': [
            'volume',
            'lockoff'
        ],
        'rope-endurance': [
            'yo-yos',
            '4-ups'
        ],
        'boulder-power': [
            'max boulder'
        ],
        'isolation-power': [
            'g-string',
            'hang-board'
        ],
        'rope-power-endurance': [
            'rope hard'
        ],
        'boulder-power-endurance': [
            'boulder hard'
        ],
    },

    valueFnByType: null,

    init() {
        this._super(...arguments);
        this.set('valueFnByType', {
            'boulder-endurance': this.getAllBoulderValues.bind(this),
            'rope-endurance': this.getAllRopeValues.bind(this),
            'boulder-power': this.getMaxBoulderValues.bind(this),
            'isolation-power': null,
            'rope-power-endurance': this.getAllRopeValues.bind(this),
            'boulder-power-endurance': this.getAllBoulderValues.bind(this),
        });
    },

    allBoulderValues: [
        'V1',
        'V2',
        'V3',
        'V4',
        'V5',
        'V6',
        'V7',
        'V8',
    ],

    allRopeValues: [
        {
            grade: '5.10',
            letters: ['a','b','c','d'],
        },
        {
            grade: '5.11',
            letters: ['a','b','c','d'],
        },
        {
            grade: '5.12',
            letters: ['a','b','c','d'],
        },
    ],

    getVarietiesForType(type) {
        return this.get(`varietiesByType.${type}`);
    },

    getValuesForType(type) {
        const getValues = this.get(`valueFnByType.${type}`);
        return getValues ? getValues() : null;
    },

    getAllBoulderValues() {
        return this.get('allBoulderValues');
    },

    getAllRopeValues() {
        return this.get('allRopeValues');
    },

    getMaxBoulderValues() {
        return this.get('allBoulderValues').slice(-4);
    }



});
