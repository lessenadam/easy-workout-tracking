import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add-workout', function() {
    this.route('new');
    this.route('details');
  });
  this.route('freestyle');
});

export default Router;
