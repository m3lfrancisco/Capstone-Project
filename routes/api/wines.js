const express = require('express');
const router = express.Router();
const winesCtrl = require('../../controllers/api/wines');

// GET /api/wines
router.get('/', winesCtrl.index);
// GET /api/wines/:id
router.get('/:id', winesCtrl.show);

module.exports = router;