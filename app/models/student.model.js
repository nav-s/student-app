import { Schema, model } from 'mongoose';

const studentSchema = Schema({
    name : {
        type : String,
        required : [true, '{PATH} is required'],
        maxlength : [50, '{PATH} should be max 50 characters'],
        searchable: true
    },
    username: {
        required : true,
        lowercase : true,
        type: String,
        unique : true
    },
    gender : {
        trim : true,
        lowercase : true,
        type : String,
        enum : {
            values : ['male', 'female'],
            message : '{PATH} with {VALUE} is is not correct',
            default : 'male'
        }
    },
    age : Number,
    email : {
        type : String,
        required : true,
        select : false
    }
}, {
    timestamps : true
})

export default model('student',studentSchema)