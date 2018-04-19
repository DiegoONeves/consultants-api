
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

	const res = await Consultant.find(query, project, limiters);
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
	await Consultant.findByIdAndRemove(id);
}

exports.count = async (query) => {
	return await Consultant.count(query);
}