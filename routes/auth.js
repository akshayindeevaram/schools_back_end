const express = require('express');
const { register, login } = require('../controllers/register');

const Router = express.Router();

Router.route('/register').post(register);
// Router.route("/login").post(login);
Router.post('/login', login);

module.exports = Router;
