var express = require('express')

var router = express.Router()
var todos = require('./api/todos.route')
var delivers = require('./api/delivers.route')

router.use('/todos', todos);
router.use('/delivers', delivers);

module.exports = router;