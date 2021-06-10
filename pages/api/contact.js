import { mailTemplate } from "../../utils/mail-template";

export default async function (req, res) {
  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const mailData = {
    from: "hadronbot@gmail.com",
    to: "souravraveendran6@gmail.com",
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

  await sgMail
    .send(mailData)
    .then(() => {
      res.status(200).json({ status: "OK" });
    })
    .catch((err) => {
      res.status(500).json({ status: "FAILED" });
    });
}
