const express = require('express');
const router = express.Router();
const { registerForResource, getUsers } = require('../controllers/userController');

// POST - Register for resource access
router.post('/resource-access', registerForResource);

// GET - Get all users (admin route)
router.get('/', getUsers);

module.exports = router;