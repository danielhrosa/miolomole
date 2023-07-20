import connectToDatabase from '../../middleware/mongodb';
import PNLD from '../../models/pnld';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import updateModel from '../../utils/updateModel';

const pnldHandler = async (req, res) => {
  await connectToDatabase();

  const { body, method } = req;
  let { _id, name, title, color, parentPnld } = body;
  try {
    switch (method) {
      case 'GET':
        try {
          if (!name && !title && !_id) {
            const pnlds = await PNLD.find()
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
          let parentPnldObj = await PNLD.findById(parentPnld);
          if (!parentPnldObj?._id) { 
            return res.status(404).json({ errorMessage: "Parent PNLD doesn't exist" });
          }
          const updatedModel = await updateModel({ _id, name, title, color, parentPnld }, PNLD);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'POST':
        try {
          const existedPnld = await PNLD.findOne({ name });
          if (!!existedPnld) { return res.status(409).json({ errorMessage: 'PNLD ja existe' }) };
          const pnld = await createModel({ name, title, color, parentPnld }, PNLD);
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