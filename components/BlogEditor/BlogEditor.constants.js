import { EditorState } from 'draft-js';
import toast from 'react-hot-toast';
import { convertToRaw, convertFromRaw } from 'draft-js';
import axios from 'axios';

export const blogFieldsState = (article) => {
  return ({
    image: { value: article?.image || '' },
    title: { value: article?.title || '' },
    content: { value: article?.content ? EditorState.createWithContent(convertFromRaw(JSON.parse(article.content))) : EditorState.createEmpty('') },
  })
};

export const blogFieldsFunction = ({ fields, setFields, name, isLoggedIn }) => ({
  image: {
    ...fields.image,
    name: 'image',
    type: 'image',
    setFields,
    readOnly: !isLoggedIn
  },
  title: {
    ...fields.title,
    name: 'title',
    placeholder: 'Titulo..',
    type: 'text',
    setFields,
    readOnly: !isLoggedIn
  },
  content: {
    ...fields.content,
    name: 'content',
    placeholder: 'Conteúdo..',
    type: 'editor',
    setFields,
    readOnly: !isLoggedIn
  },
  button: {
    name: 'submitArticle',
    type: 'button',
    variation: 'primary',
    label: 'Salvar',
    onClick: () => {
      if(!fields.title.value) { toast.error('Por favor preencha o titulo') };
      if(!fields.image.value) { toast.error('Por favor coloque uma imagem') };
      if(!fields.content.value) { toast.error('Por favor preencha o conteúdo') };
      if(fields.title.value && fields.image.value && fields.content.value) {
        const variables = {
          title: fields.title.value,
          image: fields.image.value,
          content: JSON.stringify(convertToRaw(fields.content.value.getCurrentContent())),
        }
        name === 'novo'
          ? axios.post('/api/blog', { ...variables })
            .then(() => {
              router.push(`/blog/${res.data.article.name}`)
              toast.success('Artigo postado com sucesso!');
            })
            .catch((err) => console.log(err.response))
          : axios.put('/api/blog', { ...variables, name })
            .then(() => toast.success('Artigo atualizado com sucesso!'))
            .catch((err) => console.log(err.response))
      }
    }
  }
});
  