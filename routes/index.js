var express = require('express');
var router = express.Router();

router.get('/', require('../actions/index'));

router.get('/subscriptions', require('../actions/subscriptions/form'));
router.post('/subscriptions', require('../actions/subscriptions/handler'));
router.get('/subscriptions/:id', require('../actions/subscriptions/details'));

router.get('/transactions', require('../actions/transactions/index'));
router.get('/transactions/:id', require('../actions/transactions/details'));

router.get('/charges/card/authorization', require('../actions/charges/card/authorization/form'));
router.post('/charges/card/authorization', require('../actions/charges/card/authorization/handler'));
router.get('/charges/card/authorization/:id', require('../actions/transactions/details'));
router.get('/charges/card/void/:id', require('../actions/charges/card/void/handler'));

router.get('/charges/card/capture/:id', require('../actions/charges/card/capture/handler'));

module.exports = router;
