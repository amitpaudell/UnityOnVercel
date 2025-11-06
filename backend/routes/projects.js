const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();

//Get all workouts
router.get('/', projectController.getProjects);

//Get single workouts
router.get('/:id', projectController.getProject);

//POST a new workouts
router.post('/', projectController.createProject);

//Delete a  workouts
router.delete('/:id', projectController.deleteProject);

//Update a  workouts
router.put('/:id', projectController.updateProject);

module.exports = router;
