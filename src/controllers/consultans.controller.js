'use strict';
const Model = require('../models/consultant'),
    Consultant = Model.Consultant,
    Repository = require("../repositories/consultant.repository");;


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
        var consultant = await Repository.create({
            name: req.body.name,
            email: req.body.email,
            projects: req.body.projects
        });

        res.status(200).json(consultant);

    } catch (err) {
        res.status(500).send("Erro ao criar consultor");
    }
}

exports.update = async (req, res) => {
    try {
        await Repository.update(
            req.body._id, {
                name: req.body.name,
                email: req.body.email,
                projects: req.body.projects,
                isActive: req.body.isActive
            });

        var consultant = await Repository.getById(req.body._id);

        res.status(200).json({
            _id: consultant._id,
            name: consultant.name,
            isActive: consultant.isActive,
            email: consultant.email,
            projects: consultant.projects
        });
    } catch (err) {
        res.status(500).send("Erro ao atualizar consultor");
    }

}

exports.delete = async (req, res) => {
    try {
        await Repository.delete(req.params.id);
        res.status(200).send("consultor deletado com sucesso!");

    } catch (err) {
        res.status(500).send("Erro ao tentar deletar consultor por id");
    }
}