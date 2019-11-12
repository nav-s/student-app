import { expect } from 'chai'
import sinon from 'sinon'
import mongoose from 'mongoose'
import('sinon-mongoose')
import studentController from '../app/controllers/students.controller'
import studentModel from '../app/models/student.model'

describe('Student Controller', () => {
    it('Should return all students', (done) => {
        sinon
        .mock(studentModel)
        .expects('find')
        .resolves('RESULT')

        studentModel.find()
        .then(data => {
            expect(data).to.equal('RESULT')
            done()
        })
        
    })

    it('should student by id', (done) => {
        sinon
        .mock(studentModel)
        .expects('findOne')
        .resolves('RESULT')

        studentModel.findOne()
        .then(data => {
            expect(data).to.equal('RESULT')
            done()
        })
        
    })

    it('should create new student', (done) => {
        const student = new studentModel({
            name: "mockStudent",
            username : "mockusername",
            email : "mock@user.com"
        })
        sinon
        .mock(student)
        .expects('save')
        .resolves('RESULT')

        student.save()
        .then(data => {
            expect(data).to.equal('RESULT')
            done()
        })
        
    })

    it('should return error if new student not inserted', (done) => {
        const student = new studentModel()
        sinon
        .mock(student)
        .expects('save')
        .rejects('RESULT')

        student.save()
        .catch(err => {
            expect(err.name).to.equal('RESULT')
            done()
        })
        
    })

    it('should update student', (done) => {
        
        sinon
        .mock(studentModel)
        .expects('findByIdAndUpdate')
        .resolves('RESULT')

        studentModel.findByIdAndUpdate(12345677, {
            name: "mockStudent",
            username : "mockusername",
            email : "mock@user.com"
        }, {new: true})
        .then( student => {
            expect(student).to.equals('RESULT')
            done()
        })
        
    })

})