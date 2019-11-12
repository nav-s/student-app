import studentModel from '../models/student.model'

const studentController = {
    create : (req, res) => {
        const { body : { name, username, gender, age, email, joined}  = {} } = req

        try {
            const student = new studentModel({
                name,
                username,
                gender,
                age,
                email,
                joined
            })

            student.save()
                .then(data => {
                    res.send(data)
                })
                .catch(err =>{
                    console.log(err)
                    res.status(500).send({
                        message: err.message || 'error'
                    })
                })

        } catch(e) {
            console.log(e)
        }
    },

    findAll : (req, res) =>{
        studentModel.find()
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send({
                message: err.message || 'error'
            })
        })
    },
    
    findOne : (req, res) => {
        const { params : { studentId } = {} } = req

        studentModel.findById(studentId)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send({
                message: err.message || 'error'
            })
        })
    },

    update : (req, res) => {
        const { params : { studentId } = {} } = req
        const { body : { name, username, gender, age, email, joined}  = {} } = req

        studentModel.findByIdAndUpdate(studentId, {
            name,
            username,
            gender,
            age,
            email,
            joined
        }, {new: true})
        .then( student => {
            if(!student) {
                return res.status(404).send({
                    message: `Student not found with id ${studentId}`
                });
            }
            res.send(student);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: `Student not found with id ${studentId}`
                });                
            }
            return res.status(500).send({
                message: `Error updating student with id ${studentId}`
            });
        });

    },
    search : (req, res) => {
        const { params : { search } = {} } = req
        
        studentModel.find({ "name" : new RegExp(search,'i') })
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send({
                message: err.message || 'error'
            })
        })
    }
}

export default studentController