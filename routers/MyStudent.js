const express = require("express");
const router = express.Router();
const { Student } = require('../models/student');
const multer = require('multer');

// multer start
const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');
        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype]
        cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
})


const uploadOptions = multer({ storage: storage })



// multer end



router.post(`/student`, uploadOptions.single('image'), async (req, res) => {
    console.log(req.file)
    try {
        const files = req.file;
        if (!files) return res.status(400).send('No image in the request!')

        const file = files.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        let createStudent = new Student({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            image: `${basePath}${file}`
        })
        createStudent = await createStudent.save();
        if (!createStudent) return res.status(500).send('The student cannot be created');
        res.send(createStudent)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get(`/students`, async (req, res) => {
    try {
        const studentdata = await Student.find();
        res.status(200).send(studentdata)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.get(`/student/:id`, async (req, res) => {
    try {
        const studentid = await Student.findById(req.params.id);
        if (!studentid) {
            res.status(500).json({ success: false, msg: `cannot get student id!` })
        }
        res.send(studentid)
    } catch (error) {
        console.log(error.message)
    }
})



router.patch(`/student/:id`, async (req, res) => {
    try {
        let updateStudents = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!updateStudents) {
            return res.status(400).json({ success: false, msg: "Student cannot be updated!" })
        }
        res.send(updateStudents)
    } catch (error) {
        console.log(error.message);
    }
})


router.delete(`/student/:id`, async (req, res) => {
    try {
        const deletestudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletestudent) {
            return res.status(400).json({ success: false, msg: `cannot deleted!` })
        }
        res.send(deletestudent);
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router