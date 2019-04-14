const nodemailer = require('nodemailer');
const validator = require('validator');
const sgMail = require('@sendgrid/mail');
const randomstring = require('randomstring');
const fs = require('fs');
const path = require('path');
const { newsletter, posts } = require('../database/models');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});
exports.get = async (req, res) => {
  try {
    const result = await newsletter.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const {
      id,
    } = req.body;
    newsletter.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: 'Success, email is deleted',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Internal Server Error',
    });
  }
};
exports.post = async (req, res) => {
  try {
    const hash = randomstring.generate({ length: 50 });

    const { email } = req.body;

    const data = { email, activated: true, hash };
    const checkEmail = validator.isEmail(email);
    if (email && email.trim()) {
      if (checkEmail) {
        const checkEmailIfExist = await newsletter.findAndCountAll({ where: { email }, raw: true });
        if (checkEmailIfExist.rows.length) {
          res.status(400).send({ message: 'Your email is already exist !' });
        } else {
          newsletter.create(data);
          res.status(200).send({ message: 'Thank you,' });
        }
      } else {
        res.status(401).send({ message: 'Enter Vaild Email' });
      }
    } else {
      res.status(401).send({ message: 'Fill the fields !' });
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};


exports.sendEmail = async (request, response) => {
  try {
    const { data: { list, content, subject } } = request.body;
    await Promise.all(list.map(async (email) => {
      if (validator.isEmail(email)) {
        const msg = {
          to: email,
          from: process.env.EMAIL,
          subject,
          text: 'and easy to do anywhere, even with Node.js',
          html: content,

        };
        const mailResult = await sgMail.send(msg);
        return mailResult;
      }
      return response.status(400).send({ message: 'Please enter email' });
    }));
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};

exports.sendPostToEmails = async (request, response) => {
  try {
    const { host } = request.headers;

    const { postId, list } = request.body;
    const postDetails = await posts.findByPk(postId, { raw: true });
    const newsletterEmails = await newsletter.findAll({ where: { activated: true }, raw: true });
    const img = fs.readFileSync(path.join(__dirname, '..', '..', 'uploads', postDetails.header_media[0]));
    if (list && list.length) {
      await Promise.all(list.map(async (email) => {
        const msg = {
          to: email,
          from: process.env.EMAIL,
          subject: `New Post from news site || ${postDetails.title}`,
          text: 'and easy to do anywhere, even with Node.js',
          html: postDetails.description,
        };
        const sendEmail = await sgMail.send(msg);
        return sendEmail;
      }));
      return response.status(200).send({ message: 'Post has been sent to list' });
    }
    await Promise.all(newsletterEmails.map(async (email) => {
      const msg = {
        to: email,
        from: process.env.EMAIL,
        subject: `New Post from news site || ${postDetails.title}`,
        text: 'and easy to do anywhere, even with Node.js',
        html: postDetails.description,
      };
      const sendEmail = await sgMail.send(msg);
      return sendEmail;
    }));
    return response.status(200).send({ message: 'Post has been sent to list' });
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};
