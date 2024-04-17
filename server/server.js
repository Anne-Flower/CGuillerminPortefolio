const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get("/toto", (req, res) => {
  res.status(200).send({ message: "ok" });
  return;
});

// Route pour traiter les soumissions de formulaire
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Insérer le message dans la base de données
  const sqlInsert =
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sqlInsert, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database insertion failed");
      return;
    }

    // Envoyer un e-mail
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New message from ${name}`,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Nodemailer error:", error);
        res.status(500).send("E-mail sending failed");
      } else {
        res.status(200).send("Message sent successfully");
      }
    });
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
