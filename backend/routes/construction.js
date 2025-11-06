const express = require('express');

const serviceController = require('../controllers/serviceController');

const router = express.Router();

//Get all workouts
router.get('/', serviceController.getServices);

//Get single workouts
router.get('/:id', serviceController.getService);

//POST a new workouts
router.post('/', serviceController.createService);

//Delete a  workouts
router.delete('/:id', serviceController.deleteService);

//Update a  workouts
router.put('/:id', serviceController.updateService);

module.exports = router;
