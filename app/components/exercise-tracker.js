import Ember from 'ember';

/*
exercise tracker
value for type rope  is an obj
{
    grade: 'string',
    letters: 'array'
}


*/


export default Ember.Component.extend({
    type: null,
    value: null,
    valuesToShow: Ember.computed('value', function() {
        const value = this.get('value');
        const valuesToShow = [];
        if (typeof value === 'object') {
            value.letters.forEach((letter) => {
                valuesToShow.push(`${value.grade}${letter}`);
            });
        } else {
            valuesToShow.push(value);
        }
        return valuesToShow;
    })
});
