import Pesquisas from '../../models/pesquisas';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import connectToDatabase from '../../middleware/mongodb';

const pesquisasHandler = async (req, res) => {
  await connectToDatabase();

  const { body, method } = req;
  let { _id } = body;
  let args = body ? { ...body } : {};
  try {
    switch (method) {
      case 'GET':
        try {
          if (!_id) {
            const pesquisas = await Pesquisas.find();
            return res.status(200).json(pesquisas);
          } else {
            const pesquisa = await Pesquisas.findById(_id);
            return res.status(200).json(pesquisa);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          const updatedModel = await updateModel(args, Pesquisas);
          updatedModel.name = updatedModel.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/(\s)(?=\1)/gi, "").replace(/\s/g, "-")
          await updatedModel.save();
          return res.status(200).json(updatedModel);
        } catch (err) { return res.status(500).end() };
      case 'POST':
        try {
          args.name = args.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/(\s)(?=\1)/gi, "").replace(/\s/g, "-")
          const pesquisaCreated = await createModel(args, Pesquisas);
          return res.status(200).json({ pesquisaCreated });
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'DELETE':
        try {
          await removeModel(_id, Pesquisas)
          return res.status(200).json({ message: 'Pesquisa excluída com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default pesquisasHandler;