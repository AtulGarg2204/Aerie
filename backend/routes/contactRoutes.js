const express = require('express');
const router = express.Router();
const { createContact ,createCallToAction, createAchiever,createPlan, createYoutube} = require('../controllers/contactControllers');

// POST - Create a new contact submission
router.post('/', createContact);
router.post('/calltoaction', createCallToAction);
router.post('/achievers',createAchiever);
router.post('/plans',createPlan);
router.post('/youtube',createYoutube);
module.exports = router;