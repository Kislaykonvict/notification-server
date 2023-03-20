const nodemailer = require('nodemailer');


module.exports = nodemailer.createTransport({
    port : 587,
    host : 'smtp.ethereal.email',
    auth : {
        user: 'johanna.kerluke@ethereal.email',
        pass: 'Nk3Y37GJpNTh6QNtNw',
    },
    secure : false
});