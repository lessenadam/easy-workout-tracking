import Ember from 'ember';

/*
{{selectable-button
    text=yourText
    id=yourId
    select="yourAction" //passed an id
}}
*/

export default Ember.Component.extend({
    classNames: ['selectable-button'],

    text: null,
    id: null,
    click(e) {
        // console.warn(e);
        this.sendAction('select', this.get('id'));
    }
});
