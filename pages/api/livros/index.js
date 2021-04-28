import connectDB from '../../../middleware/mongodb';
import Book from '../../../models/book';
import updateModel from '../../../utils/updateModel';
import createModel from '../../../utils/createModel';
import removeModel from '../../../utils/removeModel';

const bookHandler = async (req, res) => {
  const { body, method } = req;
  const { _id } = body;
  let args = body ? { ...body } : {};
  console.log(args)
  try{
    switch (method) {
      case 'GET':
        try {
          if(!_id) {
            const books = await Book.find();
            return res.status(200).json(books);
          }
          else { 
            const book = await Book.findById(_id);
            return res.status(200).json(book);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try{
          if(!_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel(argsWithName, Book);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { return res.status(500).end() };
      case 'POST':
        try{
          const books = await Book.find({ name: args?.name });
          if(!!books.length) { return res.status(409).json({ errorMessage: 'Parceiro ja cadastrado.' }) };
          args.name = args.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/(\s)(?=\1)/gi, "").replace(/\s/g, "-")
          const bookCreated = await createModel(args, Book);
          return res.status(200).json({ bookCreated });
        } catch (err) { console.log(err); res.status(500).end() };
      case 'DELETE':
        try{
          await removeModel(_id, Book)
          return res.status(200).json({ message: 'Cadastro excluído com sucesso!'});
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default connectDB(bookHandler);