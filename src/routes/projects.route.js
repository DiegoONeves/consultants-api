'use strict';

let controller = require('../controllers/projects.controller');

module.exports = (app) => {
    app.route('/api/projects')
        .post(controller.create)
        .get(controller.getAll);

        app.route('/api/projects/:id')
        .get(controller.getById)
        .put(controller.update)
        .delete(controller.delete);
}