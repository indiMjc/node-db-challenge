const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.findRes()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources list.' });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;
  Resources.addRes(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Failed to add new resource.' });
    });
});

module.exports = router;
