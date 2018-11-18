const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var Admin = require('../models/users/admin')
var Parent = require('../models/users/parent')

const CamperSession = require('../models/camp/camperSession.js')
const CampSession = require('../models/camp/campSession.js')

const jwtSecretKey = process.env.JWT_SECRET_KEY



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get("/api/test", (req, res) => {
  res.json({ message: "welcome to the api yo"})
})

router.post('/api/register/parent', function(req, res) {
  if (!req.body.password) {
    res.status(400).send("Password field cannot be empty.")
  }
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  Parent.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  (err, user) => {
    if (err) return res.status(500).send("There was a problem registering the user.")
    const token = jwt.sign({ id: user._id }, jwtSecretKey, {
      expiresIn: 86400
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.post('/api/login/admin', function(req, res) {
  if (!req.body.password) {
    res.status(400).send("Password field cannot be empty.")
  }
  // test
  const admin = { campLocation: "Toronto" }
  console.log("an admin has signed in")
  const payload = {
    campLocation: admin.campLocation
  }
  const token = jwt.sign(payload, jwtSecretKey, {
    expiresIn: 60 * 60
  })

  // temporary value, use admin info to find sessions
  res.json({
    success: true,
    message: "token created",
    token,
    sessions: [{id: 1, startDate: "12/20/20", endDate: "12/27/20"}, {id: 2, startDate: "1/5/18", endDate: "1/12/18"}]
  })
  console.log("response sent")

  // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  // const hashedPassword = req.body.password
  // console.log("admin try successful")

  // Admin.findOne({ where: { email: req.body.email } }).then(admin => {
  //   if (admin && admin.validPassword(hashedPassword)) {
  //     console.log("an admin has signed in")
  //     const payload = {
  //       campLocation: admin.campLocation
  //     }
  //     const token = jwt.sign(payload, jwtSecretKey, {
  //       expiresIn: 60 * 60
  //     })

  //     // temporary value, use admin info to find sessions
  //     const sessions = [{id: 1, startDate: "12/20/20", endDate: "12/27/20"}, {id: 2, startDate: "1/5/18", endDate: "1/12/18"}]

  //     res.json({
  //       success: true,
  //       message: "token created",
  //       token,
  //       sessions
  //     })

  //   } else {
  //     res.status(400).send("Email/Password is incorrect.")
  //   }
  // })
})

router.post('/api/login/parent', function(req, res) {
  if (!req.body.password) {
    res.status(400).send("Password field cannot be empty.")
  }
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  Parent.findOne({ where: { email: req.body.email } }).then(parent => {
    if (parent && parent.validPassword(hashedPassword)) {
      console.log("a parent has signed in")
      const payload = {
        id: parent.id,
      }
      const token = jwt.sign(payload, jwtSecretKey, {
        expiresIn: 60 * 60
      })
      res.json({
        success: true,
        message: "token created",
        token
      })
    } else {
      res.status(400).send("Email/Password is incorrect.")
    }
  })
})

// router.use(function(req, res, next) {
//   var token =
//     req.body.token || req.query.token || req.headers["x-access-token"];
//   if (token) {
//     jwt.verify(token, jwtSecretKey, function(err, decoded) {
//       if (err) {
//         return res.json({
//           success: false,
//           message: "Failed to authenticate token."
//         });
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.status(403).send({
//       success: false,
//       message: "No token provided."
//     });
//   }
// });


router.post('/api/session_selection', (req, res) => {
  console.log("session selection accessed")
  const currentSessionID = req.body.currentSessionID
  if (!currentSessionID) {
    res.status(400).send("Session Camper Info Not Found")
  }

  const campers =
    [
      {id: 1, firstName: "john", lastName: "doe", disease: "skin cancer", medAdministered: true, },
      {id: 2, firstName: "susan", lastName: "sue", disease: "breast cancer", medAdministered: false, },
      {id: 3, firstName: "ryan", lastName: "ray", disease: "testicular cancer", medAdministered: false, },
      {id: 3, firstName: "joe", lastName: "john", disease: "none", medAdministered: true, },
    ]
  res.json({
    success: true,
    message: "camper list sent",
    campers
  })


  // CamperSession.findAll({ where: {currentSessionID} }).then(campers => {
  //   if (campers) {
  //     res.json({
  //       success: true,
  //       message: "camper list sent",
  //       campers
  //     })
  //   } else {
  //     res.status(400).send("Session Camper Info Not Found")
  //   }
  // })

})


module.exports = router