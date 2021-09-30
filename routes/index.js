var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dinery API',description:'API for an advanced restaurant chooser' });
});

module.exports = router;
