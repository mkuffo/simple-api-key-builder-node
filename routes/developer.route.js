const express =  require('express');
const router =  express.Router();
const developerController = require('../controllers/developer.controller');

router.post('/api/developer/request-api-key',developerController.requestApiKey);

module.exports = router;