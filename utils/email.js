// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const from = process.env.NEXT_EMAIL;

export const sendEmail = ({ to, html = "", subject = "" }) => {

  sgMail.send({ to, from, subject, html })
    .then(() => {
      console.log(`Email to ${to} sent`)
    })
    .catch((err) => { console.error(err) })
};
