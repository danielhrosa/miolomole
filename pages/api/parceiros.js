import Partner from '../../models/partner';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import connectToDatabase from '../../middleware/mongodb';

const partnerHandler = async (req, res) => {
  await connectToDatabase();

  const { body, method } = req;
  const { _id } = body;
  const args = body ? { ...body } : {};

  try {
    switch (method) {
      case 'GET':
        try {
          if (!_id) {
            const partners = await Partner.find();
            return res.status(200).json(partners);
          }
          else {
            const partner = await Partner.findById(_id);
            return res.status(200).json(partner);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel(args, Partner);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { return res.status(500).end() };
      case 'POST':
        try {
          const partner = await Partner.find({ name: args?.name });
          if (!!partner.length) { return res.status(409).json({ errorMessage: 'Parceiro ja cadastrado.' }) };
          const partnerCreated = await createModel(args, Partner);
          return res.status(200).json({ partnerCreated });
        } catch (err) { console.log(err); res.status(500).end() };
      case 'DELETE':
        try {
          await removeModel(_id, Partner)
          return res.status(200).json({ message: 'Cadastro excluído com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default partnerHandler;