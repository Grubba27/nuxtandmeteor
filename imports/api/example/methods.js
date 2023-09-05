import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ExampleCollection } from './collection';

export async function create(data) {
  return ExampleCollection.insertAsync({ ...data });
}

export async function update(_id, data) {
  check(_id, String);
  return ExampleCollection.updateAsync(_id, { ...data });
}

export async function remove(_id) {
  check(_id, String);
  return ExampleCollection.removeAsync(_id);
}

export async function findById(_id) {
  check(_id, String);
  return ExampleCollection.findOneAsync(_id);
}

export async function ping() {
  return 'pong';
}

Meteor.methods({
  'Example.create': create,
  'Example.update': update,
  'Example.remove': remove,
  'Example.find': findById,
  'Example.ping': ping,
});
