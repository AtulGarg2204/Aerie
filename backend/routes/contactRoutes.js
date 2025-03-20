const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactControllers');

// POST - Create a new contact submission
router.post('/', createContact);

module.exports = router;