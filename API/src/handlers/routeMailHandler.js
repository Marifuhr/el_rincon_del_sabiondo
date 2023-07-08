const nodemailer = require("nodemailer");
require("dotenv").config();

async function routeMailHandler(req, res) {
  try {
    // const htmlEmail = `
    //               <h3>${req.body.asunto}</h3>

    //               <p>${req.body.mensaje}</p>
    //             `;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL, //El email del servicio SMTP que va a utilizar (en este caso Gmail)
        pass: process.env.PASSWORD, // La contraseña de dicho SMTP
      },
    });

    let mailOptions = {
      from: process.env.EMAIL, // Quien manda el email
      to: req.body.email, // El email de destino
      replyTo: process.env.EMAIL,
      subject: req.body.asunto, // El asunto del email
      text: req.body.mensaje, // El mensaje
      // html: htmlEmail, // La parte HTML del email
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Mensaje enviado: %s", info.mensaje);
      console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
    });
  } catch ({ message }) {
    res.json({ error: message });
  }
}
module.exports = routeMailHandler;
