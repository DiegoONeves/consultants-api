'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: [true, "O e-mail do consultor é obrigatório"],
        trim: true
    },
    projects: [],
    createDate: {
        type: Date,
        required: [true, 'A data de cadastro é obrigatória'],
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports.Consultant = mongoose.model('consultant', schema, 'consultants');