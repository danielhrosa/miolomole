import Publication from '../../models/publication';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import randomColor from '../../utils/randomColor';
import diacriticSensitiveRegex from '../../utils/diacriticSensitive';
import PublicationArea from '../../models/publicationArea';
import urlNameFormatter from '../../utils/urlNameFormatter';
import Comment from '../../models/comment';

const publicationHandler = async (req, res) => {
  const { body, method } = req;
  let { _id, name, title, image, area, content, description, hide } = body;
  try {
    switch (method) {
      case 'GET':
        try {
          if (!name && !title && !_id) {
            const publications = await Publication.find().populate({ path: 'comments', model: Comment })
            return res.status(200).json(publications);
          } else {
            const param = name ? name : _id ? _id : title;
            const publication = await Publication.find(param)
              .populate({ path: 'area', model: PublicationArea })
              .populate({ path: 'comments', model: Comment });

            console.log(publication)
            return res.status(200).json(publication);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!name && !_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const isValidObjectId = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(area);
          let pubArea = await PublicationArea.findOne(isValidObjectId ? { _id: area } : { title: { $regex: diacriticSensitiveRegex(area), $options: 'i' } });
          if (!pubArea?._id) { pubArea = await createModel({ title: area, name: urlNameFormatter(area), color: randomColor() }, PublicationArea); }
          const updatedModel = await updateModel({ _id, name, title, image, content, description, hide, area: pubArea._id }, Publication);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'POST':
        try {
          const existedPublication = await Publication.findOne({ name });
          if (!!existedPublication) { return res.status(409).json({ errorMessage: 'Artigo ja cadastrado.' }) };
          let pubArea = await PublicationArea.findOne({ title: area });
          if (!pubArea) { pubArea = await createModel({ title, name: urlNameFormatter(title), color: randomColor() }, PublicationArea); }
          const args = { name, title, image, description, content, hide, area: pubArea._id };
          const publication = await createModel(args, Publication);
          return res.status(200).json(publication);
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

export default publicationHandler;