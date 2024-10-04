const nodemailer = require("nodemailer");

// Créez un transporteur SMTP pour envoyer l'email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fai.behlouli@gmail.com",
    pass: "==========",
  },
});

// Configuration de l'email
const mailOptions = {
  from: "fai.behlouli@gmail.com", // L'expéditeur (toi-même)
  from: "fai.behlouli@gmail.com", // L'expéditeur (toi-même)
  to: "fai.behlouli@gmail.com", // Le destinataire (toi-même)
  subject: "Test Node.js Email", // Sujet de l'email
  text: "Hello! This is a test email sent from Node.js!", // Corps de l'email
};

// Envoyer l'email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
