const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'Hello World! It is in tests - Vishwa kiran'}); 
});

// Get a single parameter
router.get('/:id', (req, res) => {
    res.json({mssg: 'Hello World! It is in tests: Single parameter - Vishwa kiran'}); 
});

// Get a single parameter
router.get('/:id', (req, res) => {
    res.json({mssg: 'Hello World! It is in tests: Single parameter - Vishwa kiran'}); 
});

module.exports = router;