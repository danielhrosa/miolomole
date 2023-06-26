import connectDB from '../../middleware/mongodb';
import Comment from '../../models/comment';
import Publication from '../../models/publication';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import updateModel from '../../utils/updateModel';

const commentHandler = async (req, res) => {
  const { body, method } = req;
  let { _id, userFullName, content, email, phone, publicationId } = body;
  try {
    switch (method) {
      case 'GET':
        try {
          const comment = await Comment.findById(_id);
          return res.status(200).json(comment);
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel({ _id, userFullName, content, email, phone }, Comment);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'POST':
        try {
          const publication = await Publication.findById(publicationId);
          if(!publication) { return res.status(404).json({ errorMessage: 'Parâmetros inválidos' }); }
          const args = { userFullName, phone, email, content };
          const comment = await createModel(args, Comment);
          publication.comments.push(comment?._id);
          await publication.save();
          return res.status(200).json(comment);
        } catch (err) { console.log(err); break };
      case 'DELETE':
        try {
          await removeModel(_id, Comment)
          return res.status(200).json({ message: 'Comentário excluído com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default connectDB(commentHandler);