'use strict';
const Model = require('../models/project'),
    Project = Model.Project,
    projectRepository = require("../repositories/project.repository");

exports.getAll = async (req, res) => {
    try {
        var query = {};
        var project = {};

        var projects = await projectRepository.get(query, project);
        if (projects)
            res.status(200).json(projects);
        else
            res.status(200).send("Nenhum projeto foi localizado");

    } catch (err) {
        res.status(500).send(err);
    }
}

exports.getById = async (req, res) => {
    try {
        var project = await projectRepository.getById(req.params.id);
        if (project)
            res.status(200).json(project);
        else
            res.status(200).send("Nenhum projeto foi localizado");

    } catch (err) {
        res.status(500).send(err);
    }
}

exports.create = async (req, res) => {
    try {

        let newProject = {
            name: req.body.name,
            description: req.body.description
        };

        var project = await projectRepository.create(newProject);

        res.status(200).json(project);

    } catch (err) {
        res.status(500).send(err);
    }
}

exports.update = async (req, res) => {
    try {
        let projectToUpdate = {
            name: req.body.name,
            descrption: req.body.description
        };
        await projectRepository.update(req.params.id, projectToUpdate);
        var project = await projectRepository.getById(req.params.id);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.delete = async (req, res) => {
    try {
        await projectRepository.delete(req.params.id);
        res.status(200).json("deletado", id);
    } catch (err) {
        res.status(500).send(err);
    }
}

