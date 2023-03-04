const express = require('express');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/auth');

const route = express.Router();

// signup
route.post('/register', validateBody(schemas.registerSchema), ctrl.register);

module.exports = route;
