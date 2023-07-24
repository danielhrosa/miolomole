import connectToDatabase from '../../middleware/mongodb';
import Book from '../../models/book';
import PNLD from '../../models/pnld';
import User from '../../models/user';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import updateModel from '../../utils/updateModel';

const pnldHandler = async (req, res) => {
  await connectToDatabase();

  const { body, method } = req;
  let { _id, name, title, color, books } = body;
  try {
    switch (method) {
      case 'GET':
        try {
          if (!name && !title && !_id) {
            const pnlds = await PNLD.find();
            return res.status(200).json(pnlds);
          } else {
            const param = name ? name : _id ? _id : title;
            const publication = await PNLD.find(param)

            return res.status(200).json(publication);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!name && !_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel({ _id, name, title, color, books }, PNLD);
          await updatedModel.save();

          const updatedModelPopulated = await PNLD.findById(_id)
            .populate({ path: 'books', model: Book })
            .populate({
              path: 'books',
              populate: { path: 'authors', model: User }
            })
            .populate({
              path: 'books',
              populate: { path: 'illustrators', model: User }
            })

          return await res.status(200).json(updatedModelPopulated);
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'POST':
        try {
          const existedPnld = await PNLD.findOne({ name });
          if (!!existedPnld) { return res.status(409).json({ errorMessage: 'PNLD ja existe' }) };
          const pnld = await createModel({ name, title, color, books }, PNLD);
          return res.status(200).json(pnld);
        } catch (err) { console.log(err); break };
      case 'DELETE':
        try {
          await removeModel(_id, PNLD)
          return res.status(200).json({ message: 'PNLD excluído com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default pnldHandler;