var express = require('express')

var router = express.Router()

var DeliverController = require('../../controllers/delivers.controller');

router.get('/', DeliverController.getDelivers)
router.post('/', DeliverController.createDeliver)
router.put('/', DeliverController.updateDeliver)
router.delete('/:id',DeliverController.removeDeliver)

module.exports = router;