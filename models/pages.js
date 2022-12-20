import mongoose, { Schema } from 'mongoose';

var pages = new Schema({
  path: { type: String, unique: true, required: true },
  label: { type: String, required: true },
  isPrivate: { type: Boolean },
}, { timestamps: true });

mongoose.models = {};

var Pages = mongoose.model('Pages', pages);

export default Pages;


// let navMenuItems = [
//   { label: 'Livros', path: '/livros', isPrivate: false, isHidden: false },
//   { label: 'Onde Comprar', path: '/onde-comprar', isPrivate: false, isHidden: false },
//   { label: 'Quem somos', path: '/quem-somos', isPrivate: false, isHidden: false },
//   { label: 'Educador', path: '/educador', isPrivate: true, isHidden: false },
//   { label: 'Contato', path: '/contato', isPrivate: false, isHidden: false },
//   { label: 'Blog', path: 'https://editoramiolomole.com.br/', isPrivate: false, isHidden: false },
//   { label: 'Destaques', path: '/destaques', isPrivate: false, isHidden: false },
//   { label: 'Usuários', path: '/autores', isPrivate: false, isHidden: false }
// ];
