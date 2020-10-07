"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.gmx.net",
    port: 587,
    service: 'gmx',
    secure: false, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: '', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let mailOptions = await transporter.sendMail({
    from: '', // sender address
    to: 'hunar.karim@tib.eu', // list of receivers
    subject: 'Sending Email using Node.js', // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  transporter.sendMail(mailOptions, function(error, info){

 if(error){
   console.log(error);

 }else{
  console.log("Email send: "+info.response);
 }
  });
}

main().catch(console.error);