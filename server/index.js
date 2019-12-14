const express = require('express');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

const createApp = () => {
  app.use(express.json());
  app.use(express.urlencoded());

  app.use('/api', require('./api'));
  app.use(require('./html'));

  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.listen(PORT, () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
  });
};

createApp();
