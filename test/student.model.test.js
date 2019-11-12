import { expect } from 'chai'
import studentModel from '../app/models/student.model'

describe('Student Model', () => {
    it('should be invalid if name is empty', (done) => {
        const student = new studentModel()

        student.validate((err) => {
            expect(err.errors.name).to.exist
            expect(err.errors.username).to.exist
            expect(err.errors.email).to.exist
            done()
        })
    })

    it('should be invalid if username is empty', (done) => {
        const student = new studentModel()

        student.validate((err) => {
            expect(err.errors.username).to.exist
            done()
        })
    })

    it('should be invalid if email is empty', (done) => {
        const student = new studentModel()

        student.validate((err) => {
            expect(err.errors.email).to.exist
            done()
        })
    })
})