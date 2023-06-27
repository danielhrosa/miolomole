import PublicationArea from '../../models/publicationArea';
import Publication from '../../models/publication';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';

const publicationAreaHandler = async (req, res) => {
  const { body, method } = req;
  let { _id, name, title, color, hide } = body;
  try {
    switch (method) {
      case 'GET':
        try {
          if (!name || !title) {
            const publicationAreas = await PublicationArea.find();
            return res.status(200).json(publicationAreas);
          } else {
            const param = name ? { name } : { title }
            const publicationAreas = await PublicationArea.find(param);
            return res.status(200).json(publicationAreas);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!name) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel({ name, title, color, hide }, PublicationArea);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'POST':
        try {
          const publicationAreas = await PublicationArea.find({ name });
          if (!!publicationAreas.length) { return res.status(409).json({ errorMessage: 'Area já cadastrada.' }) };
          const publicationArea = await createModel({ name, title, color }, PublicationArea);
          return res.status(200).json({ publicationArea });
        } catch (err) { console.log(err); res.status(500).end() };
      case 'DELETE':
        try {
          await removeModel(_id, PublicationArea)
          const publications = await Publication.find({ area: _id })
          publications.forEach(async (pub) => {
            await Publication.updateOne({ _id: pub._id }, { $unset: { area: "" } });
          })
          return res.status(200).json({ message: 'Área de publicação excluída com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default publicationAreaHandler;