const nodemailer = require("nodemailer");
require("dotenv").config();

async function routeMailSubscriptionHandler(req, res) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL, // El email del servicio SMTP que va a utilizar (en este caso Gmail)
        pass: process.env.PASSWORD, // La contraseña de dicho SMTP
      },
    });

    let mailOptions = {
      from: process.env.EMAIL, // Quien manda el email
      to: req.body.email, // El email de destino
      replyTo: process.env.EMAIL,
      subject: "Suscripción exitosa", // El asunto del email
      text: "Gracias por suscribirte a nuestra newsletter", // El mensaje
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error al enviar el correo" });
      }
      // console.log("Mensaje enviado: %s", info.mensaje);
      // console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
      res.json({ message: "Correo enviado exitosamente" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al enviar el correo de suscripción" });
  }
}

module.exports = routeMailSubscriptionHandler;
