const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {

    products: (req, res) => {


            res.render('products/products')
        },
        
    detail: (req, res) => {


            res.render('products/productDetail')
        } 

		
    }
    
    module.exports = controller;