const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController')
//const multerMiddleware = require('../middleware/multer');
//const uploadFile = multerMiddleware('images','product');
//const adminMiddleware = require('../middleware/adminMiddleware');
//const validation = require('../middleware/productCreateValidation');
//const editValidations = require('../middleware/productEditValidation');

router.get('/detail', servicesController.detail)
//router.get('/edit/:id', adminMiddleware, productsController.edit)
//router.put('/edit/:id', uploadFile.array('image'), editValidations, productsController.update)
//router.get('/create', adminMiddleware, productsController.create)
//router.post('/create',uploadFile.array('image'), validation, productsController.store);
router.get('/services', servicesController.services)
//router.delete('/delete/:id', adminMiddleware, productsController.delete);
module.exports = router;