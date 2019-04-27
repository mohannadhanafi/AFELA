const sgMail = require('@sendgrid/mail');
const randomstring = require('randomstring');
const bcryptjs = require('bcryptjs');
const { users } = require('../database/models');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async (req, res) => {
  try {
    const baseURL = req.headers.host;
    const { email } = req.body;
    const curentEmail = await users.count({ where: { email } });
    if (curentEmail !== 0) {
      const hash = randomstring.generate({ length: 50 });
      await users.update({ reset_password: hash }, { where: { email } });
      setTimeout(() => {
        users.update({ reset_password: null }, { where: { email } });
      }, 86400000);
      const msg = {
        to: email,
        from: process.env.EMAIL,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<p><strong>Thank You,</strong></p>
        <p><strong>Click on the link to reset</strong></p>
        <p><a href="http://${baseURL}/admin/reset/${hash}" target="_blank" rel="noopener">Click Here</a></p>`,
      };
      sgMail.send(msg).then((result) => {
        res.status(200).send({ message: 'Thank you, We sent a message to your email' });
      }).catch((error) => {
        res.status(500).send('Internal Server Error');
      });
    } else {
      res.status(400).send({ message: 'This email doesn\'t exist' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


exports.updatePassword = async (req, res) => {
  try {
    const { data: { password }, params: { hash } } = req.body;
    const currentHash = await users.count({ where: { reset_password: hash } });
    if (currentHash !== 0) {
      bcryptjs.hash(password, 10, async (err, hashedPass) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          await users.update({ password: hashedPass }, { where: { reset_password: hash } });
          res.status(200).send({ message: 'Your password has been updated' });
        }
      });
    } else {
      res.status(400).send({ message: 'There is some problem' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
