const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');



//const { validationResult } = require('express-validator');
//const db = require('../database/models');

const controller = {

    register: (req,res) => {

			res.render('users/register')
		
	
	},
    login: (req,res) => {
        res.render('users/login')
}
}

module.exports = controller;