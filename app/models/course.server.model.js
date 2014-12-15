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
	category:{
		type: String,
		default: '',
		trim:true
	},
	section:{
		type: String,
		default: '',
		trim:true
	},
	semester:{
		type: String,
		default: '',
		trim:true
	},
	day: {
		type: String,
		default: "",
		trim:true
	},
	startTime: {
		type: Date,
		default: Date.now
	},
	endTime: {
		type: Date,
		default: Date.now
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
