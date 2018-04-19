
'use strict';
const mongoose = require('mongoose');
const Model = require('../models/consultant'),
	Consultant = Model.Consultant,
	ObjectId = require('mongoose').Types.ObjectId;


exports.get = async (query, project, limiters) => {

	if (!query)
		query = {};
	if (!project)
		project = {};
	if (!limiters)
		limiters = {};

	const res = await Consultant.find(query, project, limiters).sort({ 'name': 1 });;
	return res;
}

exports.getById = async (id) => {
	const res = await Consultant.findById(id);
	return res;
}

exports.create = async (usuario) => {

	let obj = new Consultant(usuario);
	return await obj.save();
}

exports.update = async (id, consultant) => {

	return Consultant.findByIdAndUpdate(id, {
		$set: {
			name: consultant.name,
			email: consultant.email,
			projects: consultant.projects,
			isActive: consultant.isActive
		}
	});
}

exports.delete = async (id) => {
<<<<<<< HEAD
	await Consultant.findByIdAndRemove(id);
=======
	return await Consultant.findByIdAndRemove(id);
>>>>>>> 6faaba21bf9003f0c7e15a7bbd64b44a1a726dec
}

exports.count = async (query) => {
	return await Consultant.count(query);
}