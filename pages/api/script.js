import connectToDatabase from '../../middleware/mongodb';
import Book from '../../models/book';
import updateModel from '../../utils/updateModel';

const bookHandler = async (req, res) => {
  await connectToDatabase();

  try {
    const books = await Book.find().lean();
    for (const book of books) {
      const updatedModel = await updateModel({ ...book, digitalExperiencePrice: '-' }, Book);
      updatedModel.save();
    }
  } catch (e) {
    return res.status(400).json({ response: `Error: ${e}` }).end();
  }
  return res.status(200).json({ response: "Executed" });
}
export default bookHandler;
