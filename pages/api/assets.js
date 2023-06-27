import Book from '../../models/book'

const assetsHandler = async (req, res) => {
  const { body, method } = req;
  try{
    switch (method) {
      case 'POST':
        let { name, assets, assetType } = body;
        try {
          const book = await Book.findOne({ name });
          if(!book) { return res.status(409).json({ errorMessage: 'Livro não encontrado.' }) };
          book.assets = [...book.assets.filter((item) => item.assetType !== assetType), ...assets]
          await book.save()
          return res.status(200).json({ book });
        } catch (err) { console.log(err); return };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return }
};

export default assetsHandler;