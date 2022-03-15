const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const StudentRouter = require('./routers/Student');
const MyStudent = require('./routers/MyStudent');
// const Upload = require('./routers/Upload');

require('dotenv/config');
require('./cloudinary');

//middleware call
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors())
app.use(express.json());
app.use(morgan('tiny'))
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))


// Router start
app.use(StudentRouter);
app.use(MyStudent);

app.use((req, res, next) => {
    res.status(404).json({
        error: "Sorry can't find that!"
    })
})


//connect to db heree!

mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log(`Database is connected!`);
}).catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`Your Server is running on ${PORT}`));


























































































// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;
// const bodyParser = require("body-parser");
// const { body, validationResult } = require('express-validator');

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json());
// app.use(express.json())

// // app.set('view engine', 'twig');
// // app.set('views', './public/views');


// app.get(`/`, (req, res) => {
//     res.send("Home Town!")
// })

// app.post(`/user`,
//     body('username', "username should be email id!").trim().isEmail().normalizeEmail(),
//     body('password').trim().isLength({ min: 5 }).withMessage('must be at least 5 chars long')
//         .matches(/\d/)
//         .withMessage('must contain a number')
//     , (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ error: errors.errors[0].msg })
//         }

//         let data = {
//             username: req.body.username,
//             password: req.body.password
//         }
//         console.log(data)

//         res.send(data)
//     })




















// // var validation = function (req, res, next) {
// //     console.log("User Validation Midlle_Ware Working...", req.params.id);
// //     next()
// // }

// // var userValidation = function (req, res, next) {
// //     if (req.params.username == "muhemin") {
// //         console.log('Successfully Login');
// //     } else {
// //         console.log('User is not Authorized!')
// //     }
// //     next();
// // }

// // app.get('/', (req, res) => {
// //     res.render('index', { title: 'Hey', message: 'Hello there!' })
// // })

// // app.get(`/users/:username`, userValidation, (req, res) => {
// //     res.send("Welcome Users Here! " + req.params.username)
// // })

// // app.get(`/user/:id?`, validation, (req, res) => {
// //     if (req.params.id == undefined) {
// //         res.send("Users Id not found")
// //     } else {
// //         res.send("Some data " + req.params.id)
// //     }
// // })

// // app.get(`/flights/:Form?.:To?`, (req, res) => {
// //     console.log(req.params);
// //     if (req.params.Form == undefined || req.params.To == undefined) {
// //         res.send("Flights Id Is Not Found!")
// //     } else {
// //         res.send("Search For Flights: " + "From: " + req.params.Form + " To: " + req.params.To)
// //     }
// // })

// // /*  security rules path */

// // app.get(`/ab?cd`, (req, res) => {
// //     res.send('Hello Muhemin Blog  ab ? cd!')
// // })


// // app.get(`/ab+cd`, (req, res) => {
// //     res.send('Hello Muhemin Blog ab + cd!')
// // })


// // app.get(`/ab(*)cd`, (req, res) => {
// //     console.log(req.params);
// //     res.send("Hello ABCD Blogs: !" + req.params[0] + " ab * cd")
// // })
// // //  OR same working
// // app.get(`/ab*cd`, (req, res) => {
// //     console.log(req.params);
// //     res.send("Hello ABCD Blogs: !" + req.params[0] + " ab * cd")
// // })


// // app.get(/.*fly$/, (req, res) => {
// //     res.send("This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on")
// // })


// // app.get(`/mysum/:a-:b`, (req, res) => {
// //     res.render('index', { message0: "Dynamic Sum", message1: parseInt(req.params.a) + parseInt(req.params.b) })
// // })


// app.listen(PORT, () => console.log(`Your Server is Running... ${PORT}`))


