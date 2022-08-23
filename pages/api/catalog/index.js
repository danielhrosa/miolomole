import Catalog from "../../../models/catalog";
import createModel from "../../../utils/createModel";
import updateModel from "../../../utils/updateModel";

export default async function catalogHandler(req, res) {
  const { body, method } = req;
  let args = body ? { ...body } : {};
  let { _id, label, link } = body;

  try {
    switch (method) {
      case 'GET':
        try {
          const catalogs = await Catalog.find({});
          return res.status(200).json(catalogs);
        } catch (error) {
          return res.status(405).json({ errorMessage: `Error getting catalogs` })
        }
      case 'POST':
        try {
          if (!label || !link) { return res.status(400).json({ errorMessage: 'Incompleted payload' }) };
          const newCatalog = await createModel(args, Catalog);
          return res.status(200).json({ newCatalog });
        } catch (error) {
          return res.status(405).json({ errorMessage: `Error creating catalog` })
        }
      case 'PUT':
        try {
          if (!_id) { return res.status(400).json({ errorMessage: 'Invalid parameters' }) };
          const updatedModel = await updateModel(args, Book);
          await updatedModel.save();
          return res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() }
      case 'DELETE':
        try {

        } catch (err) { console.log(err); return res.status(500).end() }
      default: return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
};
