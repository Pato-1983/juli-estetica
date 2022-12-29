const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {

    services: (req, res) => {


            res.render('services/services')
        }, 

    detail: (req, res) => {


        res.render('services/serviceDetail')
        }

		
    }
    
    module.exports = controller;