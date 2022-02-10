var express = require('express');
var router = express.Router();
const { Users } = require("../model");

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(Users.count())
  res.json(200, { title: 'Express' });
});

module.exports = router;
