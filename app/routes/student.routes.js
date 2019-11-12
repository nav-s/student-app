import studentController from '../controllers/students.controller'
import express from 'express'

const studentRouter = express.Router()

// Search Student
studentRouter.get('/search/:search', studentController.search)

// Create new student
studentRouter.post('/', studentController.create)

// Get All Students
studentRouter.get('/', studentController.findAll)

// Get Student by id
studentRouter.get('/:studentId', studentController.findOne)

// Update Student
studentRouter.put('/:studentId', studentController.update)

export default studentRouter