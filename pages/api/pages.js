import connectDB from '../../middleware/mongodb';
import Page from '../../models/pages';
import updateModel from '../../utils/updateModel';

const bookHandler = async (req, res) => {
  const { body, method } = req;
  let { _id } = body;
  let args = body ? { ...body } : {};
  try {
    switch (method) {
      case 'PUT':
        try {
          if (!_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel(args, Page);
          await updatedModel.save();
          return res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) {
    console.log(err)
    return res.status(500).end();
  }
};

export default connectDB(bookHandler);