'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Course Schema
 */
var CourseSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Course name',
		trim: true
	},
	courseCode:{
		type: String,
		default: '',
		required:'Please fill Course Code',
		trim:true
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

mongoose.model('Course', CourseSchema);
