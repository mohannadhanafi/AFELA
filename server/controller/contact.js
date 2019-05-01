const nodemailer = require('nodemailer');
const validator = require('validator');
const { contactus } = require('../database/models');

exports.post = async (request, response) => {
  try {
    const {
      name, email, message, mobile, text,
    } = request.body;
    if (
      name
      && name.trim()
      && email
      && email.trim()
      && message
      && message.trim()
      && mobile
      && mobile.trim()
      && text
      && text.trim()
    ) {
      const checkEmail = validator.isEmail(email);
      if (checkEmail) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
          },

        });
        const mailOptions = {
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          replyTo: email,
          text: message,
        };
        transporter.sendMail(mailOptions, (error, res) => {
          if (error) {
            response.status(500).send({ message: 'Internal Server Error' });
          } else {
            contactus.create({
              name, email, mobile, message: text,
            }).then(() => {
              response.status(200).send({ message: 'Your Email has been Send' });
            });
          }
        });
      } else {
        response.status(401).send({ message: 'Enter Vaild Email' });
      }
    } else {
      response.status(401).send({ message: 'Fill all the fields !' });
    }
  } catch (error) {
    response.status(500).send({ message: 'Internal Server Error' });
  }
};
