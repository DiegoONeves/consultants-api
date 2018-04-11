'use strict';

let controller = require('../controllers/consultans.controller');

module.exports = (app) => {
    app.route('/api/consultants')
        .post(controller.create)
        .put(controller.update)
        .get(controller.getAll);

        app.route('/api/consultants/:id')
        .get(controller.getById)
        .delete(controller.delete);
}