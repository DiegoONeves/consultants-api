'use strict';
const Model = require('../models/consultant'),
    Consultant = Model.Consultant,
    Repository = require("../repositories/consultant.repository");


exports.getAll = async (req, res) => {
    try {
        var query = {};
        var project = { "name": 1, "email": 1 };

        var consultants = await Repository.get(query, project);
        if (consultants)
            res.status(200).json(consultants.map(x => {
                return {
                    _id: x._id,
                    name: x.name,
                    email: x.email,
                };
            }));
        else
            res.status(200).send("Nenhum consultor foi localizado");

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
                isActive: consultant.isActive
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

        let consultantToUpdate = {
            name: req.body.name,
            email: req.body.email,
            projects: req.body.projects,
            isActive: req.body.isActive
        };
        await Repository.update(req.params.id, consultantToUpdate);

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

        await Repository.delete(req.params.id);
        res.status(200).json("deletado", id);

    } catch (err) {
        res.status(500).send(err);
    }
}