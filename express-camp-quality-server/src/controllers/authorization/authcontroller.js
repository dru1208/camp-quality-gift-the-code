const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const User = require('../user/User'); // fix

const jwtSecretKey = process.env.JWT_SECRET_KEY



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/register', function(req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
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
