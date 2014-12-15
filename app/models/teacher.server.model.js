'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Teacher Schema
 */
var TeacherSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Teacher name',
		trim: true
	},
	designation: {
		type: String,
		default: '',
		trim: true
	},
	teacherId: {
		type: String,
		required: 'Please fill Teacher Id',
		default: '',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	category: {
		type: String,
		default: '',
		trim: true
	},
	department: {
		type: String,
		default: '',
		trim: true
	},
	courseTaking: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Teacher', TeacherSchema);
