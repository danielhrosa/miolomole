import Highlight from '../../models/highlight';
import updateModel from '../../utils/updateModel';
import createModel from '../../utils/createModel';
import removeModel from '../../utils/removeModel';

const highlightHandler = async (req, res) => {
  const { body, method } = req;
  let { _id, title, description, image } = body;
  let args = body ? { ...body } : {};
  try{
    switch (method) {
      case 'GET':
        try {
          if(!_id) {
            const highlights = await Highlight.find();
            return res.status(200).json(highlights);
          }
          else {
            if(_id) {
              const highlight = await Highlight.findById(_id); 
              return res.status(200).json(highlight); 
            }
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try{
          if(!_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel(args, Highlight);
          await updatedModel.save();
          return res.status(200).json(updatedModel);
        } catch (err) { return res.status(500).end() };
      case 'POST':
        try{
          const highlight = await Highlight.find({ title, description, image });
          if(!!highlight.length) { return res.status(409).json({ errorMessage: 'Destaque já cadastrado.' }).end() };
          const highlightCreated = await createModel(args, Highlight);
          return res.status(200).json({ highlightCreated });
        } catch (err) { console.log(err); return res.status(500).end() };
      case 'DELETE':
        try{
          await removeModel(_id, Highlight)
          return res.status(200).json({ message: 'Destaque excluído com sucesso!'});
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default highlightHandler;