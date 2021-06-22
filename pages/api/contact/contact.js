import { mailTemplate } from "../../../utils/contact-mail-template";

export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE_PROVIDER,
    auth: {
      user: process.env.SMTP_USER_MAIL,
      pass: process.env.SMTP_USER_PASS,
    },
  });

  const mailData = {
    from: process.env.CONTACT_FROM_MAIL,
    to: process.env.CONTACT_TO_MAIL,
    subject: `Auticare enquiry from ${req.body.fullName}`,
    text: req.body.subject + " | Sent from: " + req.body.fullName,
    html: mailTemplate(
      req.body.fullName,
      req.body.email,
      req.body.phoneNumber,
      req.body.subject,
      req.body.message
    ),
  };

  if (req.method === "POST") {
    await transporter
      .sendMail(mailData)
      .then(() => {
        res.status(200).json({ status: "OK" });
      })
      .catch((err) => {
        res.status(405).json({ status: "FAILED" });
      });
  } else {
    res.status(405).end("Method not Allowed");
  }
}
