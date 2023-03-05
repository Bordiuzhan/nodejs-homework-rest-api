const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/auth');

const route = express.Router();

// signup
route.post('/register', validateBody(schemas.registerSchema), ctrl.register);

// signin
route.post('/login', validateBody(schemas.loginSchema), ctrl.login);

route.get('/current', authenticate, ctrl.getCurrent);

route.post('/logout', authenticate, ctrl.logout);

module.exports = route;
