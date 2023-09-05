import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { BooksCollection } from './collection';

export async function create(data) {
  return BooksCollection.insertAsync({ ...data });
}

export async function update(_id, data) {
  check(_id, String);
  return BooksCollection.updateAsync(_id, { ...data });
}

export async function remove(_id) {
  check(_id, String);
  return BooksCollection.removeAsync(_id);
}

export async function findById(_id) {
  check(_id, String);
  return BooksCollection.findOneAsync(_id);
}

export function aoba() {
  return 'aoba';
}

Meteor.methods({
  'Books.create': create,
  'Books.update': update,
  'Books.remove': remove,
  'Books.find': findById,
  'Books.aoba': aoba,
});
