'use strict';
const mongoose = require('mongoose');
const Model = require('../models/project'),
    Project = Model.Project;

exports.get = async (query, project, limiters) => { 
    if (!query)
        query = {};
    if (!project)
        project = {};
    if (!limiters)
        limiters = {};

    const res = await Project.find(query, project, limiters);
    return res;
}

exports.getById = async (id) => {
	const res = await Project.findById(id);
	return res;
}

exports.create = async (project) => {
	let obj = new Project(project);
	return await obj.save();
}

exports.update = async (id, project) => {

	return Project.findByIdAndUpdate(id, {
		$set: {
			name: project.name,
			description: project.description
		}
	});
}

exports.delete = async (id) => {
	await Project.findByIdAndRemove(id);
}

exports.count = async (query) => {
	return await Project.count(query);
}


