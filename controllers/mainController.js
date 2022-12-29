const fs = require('fs');
const path = require('path');
//const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {

    index : (req,res) => res.render('main/index'),

    //contact: (req,res) => res.render('main/contact'),

    //help: (req,res) => res.render('main/help'),

    //about: (req,res) => res.render('main/about')
    
}

module.exports = controller;