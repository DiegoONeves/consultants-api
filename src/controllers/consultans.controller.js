'use strict';
const Model = require('../models/consultant'),
    Consultant = Model.Consultant,
    Repository = require("../repositories/consultant.repository");;


exports.getAll = async (req, res) => {

    try {

        var query = {};
        var project = {};
        var limiters = {};

        if (req.query.project) {
            let items = req.query.project.split(',');
            for (let item of items) {
                let arrayProject = item.split('=');
                project[arrayProject[0]] = parseInt(arrayProject[1]);
            }
        }

        if (req.query.filter) {
            let items = req.query.filter.split(',');
            for (let item of items) {
                let arrayFilter = item.split('=');

                if (arrayFilter[0] === 'name') {
                    query.name = new RegExp(arrayFilter[1], "i");
                }
                if (arrayFilter[0] === 'email') {
                    query.email = arrayFilter[1];
                }
            }
        }

        if (req.query.limiters) {
            let items = req.query.limiters.split(',');
            for (let item of items) {
                let arrayLimiters = item.split('=');
                limiters[arrayLimiters[0]] = parseInt(arrayLimiters[1]);
            }
        }

        console.log(project);
        console.log(query);
        console.log(limiters);

        var consultants = await Repository.get(query, project, limiters);

        let responseServer = {
            data: consultants,
            totalItems: await Repository.count(query)
        }

        res.status(200).json(responseServer);

    } catch (err) {
        res.status(500).send("Erro ao tentar obter consultores");
    }
}

exports.getById = async (req, res) => {
    try {
        var consultant = await Repository.getById(req.params.id);
        if (consultant)
            res.status(200).json({
                _id: consultant._id,
                name: consultant.name,
                email: consultant.email,
                projects: consultant.projects,
                isActive: consultant.isActive,
                createDate: consultant.createDate
            });
        else
            res.status(200).send("Nenhum consultor foi localizado");

    } catch (err) {
        res.status(500).send("Erro ao tentar obter consultor por id");
    }
}

exports.create = async (req, res) => {
    try {

        let newConsultant = {
            name: req.body.name,
            email: req.body.email,
            projects: req.body.projects
        };

        var consultant = await Repository.create(newConsultant);

        res.status(200).json(consultant);

    } catch (err) {
        res.status(500).send(err);
    }
}

exports.update = async (req, res) => {
    try {
        await Repository.update(
            req.params.id, {
                name: req.body.name,
                email: req.body.email,
                projects: req.body.projects,
                isActive: req.body.isActive
            });

        var consultant = await Repository.getById(req.params.id);

        res.status(200).json({
            _id: consultant._id,
            name: consultant.name,
            isActive: consultant.isActive,
            email: consultant.email,
            projects: consultant.projects
        });
    } catch (err) {
        res.status(500).send(err);
    }

}

exports.delete = async (req, res) => {
    try {
        let consultant = await Repository.delete(req.params.id);
        res.status(200).json(consultant);

    } catch (err) {
        res.status(500).send(err);
    }
}