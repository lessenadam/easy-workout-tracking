import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exercise-tracker', 'Integration | Component | exercise tracker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exercise-tracker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exercise-tracker}}
      template block text
    {{/exercise-tracker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
