const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('comments');
  });
  
  module.exports = router;
  