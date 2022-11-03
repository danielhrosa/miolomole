import connectDB from '../../middleware/mongodb';
import Publication from '../../models/publication';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';

const publicationHandler = async (req, res) => {
  const { body, method } = req;
  let { _id, name, title, image, content, description, hide } = body;
  try {
    switch (method) {
      case 'GET':
        try {
          if (!name || !title) {
            const posts = await Publication.find();
            return res.status(200).json(posts);
          } else {
            const param = name ? { name } : { title }
            const post = await Publication.find(param);
            return res.status(200).json(post);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!name || !_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel({ name, title, image, content, description, hide }, Publication);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { console.log(err); break; };
      case 'POST':
        try {
          const existedPublication = await Publication.findOne({ name });
          if (!!existedPublication) { return res.status(409).json({ errorMessage: 'Artigo ja cadastrado.' }) };
          const args = { name, title, image, description, content, hide };
          const publication = await createModel(args, Publication);
          return res.status(200).json({ publication });
        } catch (err) { console.log(err); break };
      case 'DELETE':
        try {
          await removeModel(_id, Publication)
          return res.status(200).json({ message: 'Artigo excluído com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default connectDB(publicationHandler);