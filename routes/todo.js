const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define your routes here
router.get('/', userController.getAllUser);
// Add more routes for other CRUD operations

// create
router.post('/create', userController.create);

// read
router.get('/read', userController.read);

// update 
router.post('/update/:id', userController.update);

// delete
router.get('/delete/:id', userController.delete);

module.exports = router;