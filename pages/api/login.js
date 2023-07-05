import User from '../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';
import connectToDatabase from '../../middleware/mongodb';

const loginHandler = async (req, res) => {
  await connectToDatabase();
  try {
    const { method } = req;
    switch (method) {
      case 'POST':
        const { userName, password } = req.body;
        if (!userName && !password) { return res.status(422).json({ errorMessage: 'Dados Incompletos'}) };
        const user = await User.findOne({ userName });
        if(!user) { return res.status(404).json({ errorMessage: 'Usuário inválido' }) };
        if(!bcrypt.compareSync(password, user.password)) { return res.status(401).json({ errorMessage: 'Usuário ou senha inválidos' }) };
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        user.token = token;
        user.save();
        setCookie('TK', token, { req, res })
        return res.status(200).json({ user });
      default: return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
};

export default loginHandler;
