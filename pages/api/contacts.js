import contactEmail from '../../utils/emails/contact';
import { sendEmail } from '../../utils/email';
import contactResponseEmail from '../../utils/emails/contactResponse';
import newsletterEmail from '../../utils/emails/newsletter';
import Contact from '../../models/contact';
import removeModel from '../../utils/removeModel';

export default async function contactHandler(req, res) {
  const { body, method } = req;
  let args = body ? { ...body } : {};
  let { _id, name, email, message, type = 'contact' } = body;

  try {
    switch (method) {
      case 'POST':
        switch (type) {
          case "newsletter":
            try {
              sendEmail({ to: email, html: newsletterEmail({ ...args }), subject: "Contato Miolo Mole Site" });
              return res.status(200).end();
            } catch (error) {
              return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` });
            }
          case "contact":
          default:
            try {
              if (!name || !email || !message) { return res.status(400).json({ errorMessage: 'Digite um email válido' }) };
              sendEmail({ to: process.env.NEXT_EMAIL, html: contactEmail({ ...args }), subject: "Contato Miolo Mole Site" });
              sendEmail({ to: email, html: contactResponseEmail({ ...args }), subject: "Miolo Mole Site" });
              const contato = new Contact({ name, email, message });
              await contato.save();
              return res.status(200).end();
            } catch (error) {
              return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
            }
        }
      case 'DELETE':
        try {
          await removeModel(_id, Contact)
          return res.status(200).json({ message: 'Contato excluído com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default: return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
};
