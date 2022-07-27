import nodemailer from "nodemailer";

const host = process.env.NEXT_EMAIL_HOST;
const port = Number(process.env.NEXT_EMAIL_PORT);
const email = process.env.NEXT_EMAIL;
const pass = process.env.NEXT_PASSWORD;

export const createEmail = ({ to, html = "", subject = "" }) => {
  return { from: `"Miolo Mole" <${email}>`, to, subject, html };
};

export const transport = nodemailer.createTransport({ host, port, auth: { user: email, pass } });
