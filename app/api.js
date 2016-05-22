var express = require('express');
var router = express.Router();

router.get('/geta', function(req, res, next) {

  var a = req.query.a;
  if (!a) {
    return res.json({ error: "missing param a" });
  }

  return res.json({ result: "this is a:"+a });
});

router.post('/postb', function(req, res, next) {

  var b = req.body.b;
  if (!b) {
    return res.json({ error: "missing param b" });
  }

  return res.json({ result: "this is b:"+b });
})

module.exports = router;
