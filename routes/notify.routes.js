const express = require('express');
const { acceptNotificationRequest, getNotificationRequest } = require('../controller/notify.controller');
const router = express.Router();

router.post('/notifiServ/api/v1/notifications', acceptNotificationRequest)
router.get('/notifiServ/api/v1/notifications/:id', getNotificationRequest)



module.exports = router;