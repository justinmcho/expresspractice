const express = require('express')
const Workout = require('../models/workoutModel')

// get all workouts


// get a single workout


// create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

// delete a workout


// update a workout



module.exports = {
    createWorkout
} 