import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/text';

const textos = async (req, res) => {
  const { method } = req;

  try{
    switch (method) {
      case 'GET':
        try {
          const texts = await Text.find({ page: req.query.page });
          res.status(200).json({ texts });
        } catch (err) { res.status(500).json({ errorMessage: err.message }) }
      case 'PUT':
        try {
          const { textKey, text, editedBy, page } = req.body;
          if(!textKey && !text) { res.status(422).json({ errorMessage: 'Dados Incompletos' }) };
          try {
            var oldText = await Text.findOne({ textKey });
            if (oldText) {
              oldText.text = text;
              oldText.editedBy = editedBy;
              var oldTextUpdated = await oldText.save();
              res.status(200).json({ oldTextUpdated });
            } else {
              var newText = new Text({ textKey, text, page, editedBy });
              var textCreated = await newText.save();
              res.status(200).json({ textCreated });
            }
          } catch (err) { res.status(500).json({ errorMessage: err.message }) }
        } catch (err) { res.status(500).json({ errorMessage: err.message }) }
      case 'POST': 
        const { textKey, text, page, editedBy } = req.body;
        if (textKey && text && page) {
          try {
            var newText = new Text({ textKey, text, page, editedBy });
            var textCreated = await newText.save();
            res.status(200).json({ textCreated });
          } catch (error) { res.status(500).json({ errorMessage: error.message }) }
        } else { res.status(422).json({ errorMessage: 'data_incomplete' }); }
      default:
        res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { res.end() }
  
};

export default connectDB(textos);