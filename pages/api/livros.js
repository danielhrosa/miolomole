import Book from '../../models/book';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import connectToDatabase from '../../middleware/mongodb';
import BookPnld from '../../models/bookPnld';

const bookHandler = async (req, res) => {
  await connectToDatabase();

  const { body, method } = req;
  let { _id, name, title, pnld } = body;
  let args = body ? { ...body } : {};
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  
  const dynamicModel = pnld ? BookPnld : Book;

  try {
    switch (method) {
      case 'GET':
        try {
          if (!_id || !title) {
            const books = await dynamicModel.find(token ? {} : { isHidden: { $ne: true } });
            return res.status(200).json(books);
          }
          else {
            let book;
            if (_id) { book = await dynamicModel.findById(_id); }
            if (title) { book = await dynamicModel.find(token ? { title } : { isHidden: { $ne: true }, title }); }
            return res.status(200).json(book);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try {
          if (!name && !_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel(args, dynamicModel);
          updatedModel.name = updatedModel.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/(\s)(?=\1)/gi, "").replace(/\s/g, "-")
          await updatedModel.save();
          return res.status(200).json(updatedModel);
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'POST':
        try {
          const book = await dynamicModel.findOne({ title });
          if (!!book) { return res.status(409).json({ errorMessage: 'Livro ja cadastrado.' }) };
          args.name = args.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/(\s)(?=\1)/gi, "").replace(/\s/g, "-")
          const bookCreated = await createModel(args, dynamicModel);
          return res.status(200).json({ bookCreated });
        } catch (err) { console.log(err); res.status(500).end() };
      case 'DELETE':
        try {
          await removeModel(_id, dynamicModel)
          return res.status(200).json({ message: 'Livro excluído com sucesso!' });
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) {
    return res.status(500).end();
  }
};

export default bookHandler;