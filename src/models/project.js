'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //todo
    name: {
        type: String,
        required: [true],
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

module.exports.Project = mongoose.model('project', schema, 'projects');

