const router = require('express').Router();
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.NODEMAILER,
      pass: process.env.NODEMAILER_PASS
    }
  });

router.post('/', (req, res) => {

    let mailBody = {
        from: 'jmepereira2010@hotmail.com',
        to: 'jmepereira2010@gmail.com, jmep.dev@gmail.com',
        subject: req.body.name + ' ' + 'deixou uma mensagem em jmep.dev',
        html: '<h3>Hello Dev!</h3></br>' +
            'Foi deixada uma nova mensagem em jmep.dev de ' + req.body.name + '</br>' +
            'Segue a mensagem: ' + req.body.message + '</br>' +
            'Email para contato: ' + req.body.email + '</br>' +
            '<p> Mensagem enviada em: </p> ' + req.body.date 

      };

      transporter.sendMail(mailBody, function(error, info){
        if (error) {
            res.status(504).json('error, try again or contact your admin')
            console.log(error);
        } else {
            res.status(200).json('email send')
            console.log('Email sent: ' + info.response);
        }
      });
})

module.exports = router