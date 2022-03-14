const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {

    }
})


router.post(`/uploadimage`, async (req, res) => {

})







module.exports = router;















// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { Student } = require('../models/student');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "--" + file.originalname)
//     }
// })

// let filefilter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     filefilter: filefilter
// })

// /*
// 1) img path
// 2) limit 5mb
// 3) filter png, jpeg, jpg
// */




// router.post(`/upload`, upload.single('image'), async (req, res) => {
//     try {
//         console.log(req.file);
//         let uploadimage = new Student({
//             image: req.file.path
//         })
//         uploadimage = await uploadimage.save();
//         if (!uploadimage) {
//             return res.status(400).json({ success: false, msg: "No image in the request!" })
//         }
//         res.send(uploadimage)
//     } catch (error) {
//         console.log(error.message);
//     }
// })

// router.get(`/getpicture`, async (req, res) => {
//     try {
//         let checkimage = await Student.find();
//         if (!checkimage) {
//             return res.status(400).json({ success: false, msg: "Image is not found!!" })
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// })











// // const fileStorage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, "./images")
// //     },
// // filename: (req, file, cb) => {
// //     cb(null, Date.now() + "--" + file.originalname)
// // }
// // });

// // const upload = multer({ storage: fileStorage })


// // router.post(`/upload`, upload.single("image"), async (req, res) => {
// //     try {
// //         console.log(req.file);
// //         res.status(200).send("File is uploaded")
// //     } catch (error) {
// //         console.log(error.message)
// //     }
// // })


// // router.post(`/multiple`, upload.array("images", 3), async (req, res) => {
// //     try {
// //         console.log(req.files);
// //         res.send('files uploaded')
// //     } catch (error) {
// //         console.log(error.message)
// //     }
// // })



// module.exports = router