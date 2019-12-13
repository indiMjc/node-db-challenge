const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources list.' });
    });
});

module.exports = router;
