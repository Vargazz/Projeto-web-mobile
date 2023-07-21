const { Router } = require('express');

const UserMiddleware = require('../src/app/middlewares/userMiddleware')
const UserController = require('../src/app/controllers/userController');

const categoriesController = require('../src/app/controllers/categoriesController')

const PlaybookController = require('../src/app/controllers/playbooksController');

const router = Router();

//USUARIOS
router.get('/users', UserController.findAll);
router.post('/login', UserController.findOneByEmail);
router.post('/register', UserMiddleware.validateUser, UserController.create);
router.put('/users/:id', UserController.update);


//CATEGORIAS
router.post('/categories', categoriesController.create);
router.get('/categories/:id', categoriesController.findAllByUserId);


//PLAYBOOKS
router.post('/playbooks', PlaybookController.create);
router.get('/playbooks/:id', PlaybookController.findAllByUserId);
router.put('/playbooks/:id', PlaybookController.update);

module.exports = router;