import contactEmail from '../../../utils/emails/contact';
import { createEmail, transport } from "../../../utils/email";
import contactResponseEmail from '../../../utils/emails/contactResponse';
import newsletterEmail from '../../../utils/emails/newsletter';

export default async function contactHandler(req, res) {
  const { body, method } = req;
  let args = body ? { ...body } : {};
  let { name, email, message, type = 'contact' } = body;

  try {
    switch (method) {
      case 'POST':
        switch (type) {
          case "newsletter":
            try {
              transport.sendMail(createEmail({ to: email, html: newsletterEmail({ ...args }), subject: "Contato Miolo Mole Site" }));
              return res.status(200).end();
            } catch (error) {
              return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` });
            }
          case "contact":
          default:
            try {
              if (!name || !email || !message) { return res.status(400).json({ errorMessage: 'Digite um email válido' }) };
              transport.sendMail(createEmail({ to: 'pedroraimondi6@gmail.com', html: contactEmail({ ...args }), subject: "Contato Miolo Mole Site" }));
              transport.sendMail(createEmail({ to: email, html: contactResponseEmail({ ...args }), subject: "Miolo Mole Site" }));
              return res.status(200).end();
            } catch (error) {
              return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
            }
        }

      default: return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
};
