const nodemailer = require("nodemailer");
require("dotenv").config();

async function routeMailHandler(req, res) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL, // El email del servicio SMTP que va a utilizar (en este caso Gmail)
        pass: process.env.PASSWORD, // La contraseña de dicho SMTP
      },
    });

    let bookListHtml = "";
    let totalAmount = 0;

    // Recorre cada libro en la lista de productos
    for (const book of req.body.products) {
      const { title, quantity, price } = book;
      const bookTotal = quantity * price;

      // Agrega la información del libro al HTML del email
      bookListHtml += `
        <p>Título: ${title}</p>
        <p>Cantidad: ${quantity}</p>
        <p>Precio unitario: ${price}</p>
        <p>Total: ${bookTotal}</p>
        <hr />
      `;

      // Actualiza el monto total acumulado
      totalAmount += bookTotal;
    }

    // Agrega el monto total al HTML del email
    bookListHtml += `<p>Monto total: ${totalAmount}</p>`;

    const htmlEmail = `
      <h1>Felicidades, su compra fue exitosa</h1>
      <h2>Lista de artículos</h2>
      ${bookListHtml}
      <p>${req.body.mensaje}</p>
    `;

    let mailOptions = {
      from: process.env.EMAIL, // Quien manda el email
      to: req.body.email, // El email de destino
      replyTo: process.env.EMAIL,
      subject: req.body.asunto, // El asunto del email
      text: req.body.mensaje, // El mensaje
      html: htmlEmail, // La parte HTML del email
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
  } catch ({ message }) {
    res.json({ error: message });
  }
}

module.exports = routeMailHandler;
