var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res = "12345"
  res.send(res);
});

module.exports = router;
