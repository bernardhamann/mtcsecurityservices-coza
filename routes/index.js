var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
        title: 'Welcome',
        description: 'This is the description',
        ff: 'test'
    });

});
module.exports = router;
