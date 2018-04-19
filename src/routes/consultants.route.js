'use strict';

let controller = require('../controllers/consultans.controller');

module.exports = (app) => {
    app.route('/api/consultants')
        .post(controller.create)
<<<<<<< HEAD
        //.put(controller.update)
=======
>>>>>>> 6faaba21bf9003f0c7e15a7bbd64b44a1a726dec
        .get(controller.getAll);

        app.route('/api/consultants/:id')
        .get(controller.getById)
        .put(controller.update)
        .delete(controller.delete);
}