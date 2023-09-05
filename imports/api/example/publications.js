import { Meteor } from 'meteor/meteor';
import { ExampleCollection } from './collection';

Meteor.publish('allExamples', function publishExamples() {
  return ExampleCollection.find({});
});
