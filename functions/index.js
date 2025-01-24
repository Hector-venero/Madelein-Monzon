const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

// Configura el transporte de correo con tu cuenta de Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hectorvenero2908@gmail.com", // Tu correo de origen
    pass: "typyayxujklnyskg", // Tu contraseña de aplicación
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send({error: "Método no permitido"});
    }

    console.log("Datos recibidos:", req.body);
    const {nombre, email, telefono, mensaje} = req.body;

    const mailOptions = {
      from: "hectorvenero2908@gmail.com",
      to: "m.monzon@grupotarno.com",
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      text: `Has recibido un nuevo mensaje del formulario de contacto:\n\n
      Nombre: ${nombre}\n
      Email: ${email}\n
      Teléfono: ${telefono}\n
      Mensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error enviando mesaje:", error);
        return res.status(500).send({error: "Error enviando mensaje"});
      }
      console.log("Mensaje enviado:", info.response);
      res.status(200).send({success: true, message:
         "Mensaje enviado correctamente"});
    });
  });
});
