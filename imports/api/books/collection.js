import { Mongo } from 'meteor/mongo';

export const BooksCollection = new Mongo.Collection('books');
