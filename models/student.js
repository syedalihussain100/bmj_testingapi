const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        minlength: 5,
        lowercase: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Email is Invalid!`)
            }
        }
    },
    phone: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        lowercase: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    },
    images: [{
        type: String
    }],
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})



exports.Student = mongoose.model(`Students`, studentSchema);


// const Student = new mongoose.model(`Students`, studentSchema);

// module.exports = Student;
