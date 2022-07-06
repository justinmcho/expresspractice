const express = require('express')
const {
    createWorkout,
} = require('../controllers/workoutController')
const Workout = require('../models/workoutModel')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({msg:'GET single workout'})
})

// POST a new workout
router.post('/', async (req, res) => {
    
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg:"DELETE a workout"})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({msg:"UPDATE a workout"})
})

// exporting router
module.exports = router