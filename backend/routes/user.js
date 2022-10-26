const express = require('express');
const { create } = require('../controllers/user');
const { userValidator } = require('../middlewares/validator');

const router = express.Router()

router.post('/create', userValidator, create);

module.exports = router;