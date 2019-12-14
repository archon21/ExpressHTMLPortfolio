const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, name, subject, message, to } = req.body;
  const output = `<p>You have a new Contact from ${email} </p> <p>Contact Details.</p> <ul>  <li>Name:${
    name ? name : 'Quick Contact'
  } <li>Email:${email}</li>
      <li>Subject:${subject}</li>
      <li>Phone:${phone ? phone : 'No Phone(Quick req.body)'}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>`;
  let tranporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    }
  });
  let mailOptions = {
    to,
    from,
    subject,
    text: message,
    html: output
  };
  tranporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.sendStatus(500);
      return console.error(err);
    }
    console.log(`Message was sent to ${info.messageId}`);
  });
  res.sendStatus(200);
});

module.exports = router
