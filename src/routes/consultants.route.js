'use strict';

let controller = require('../controllers/consultans.controller');

module.exports = (app) => {
    app.route('/api/consultants')
        .post(controller.create)
        .get(controller.getAll);

        app.route('/api/consultants/:id')
        .get(controller.getById)
        .put(controller.update)
        .delete(controller.delete);
}