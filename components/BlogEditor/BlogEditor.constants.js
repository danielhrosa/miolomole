import { EditorState } from 'draft-js';
import toast from 'react-hot-toast';
import { convertToRaw, convertFromRaw } from 'draft-js';
import axios from 'axios';

export const blogFieldsState = (article) => {
  return ({
    image: { value: article?.image || '' },
    title: { value: article?.title || '' },
    description: { value: article?.description || '' },
    content: { value: article?.content ? EditorState.createWithContent(convertFromRaw(JSON.parse(article.content))) : EditorState.createEmpty('') },
  })
};

export const blogFieldsFunction = ({ fields, setFields, name, isLoggedIn }) => ({
  image: {
    ...fields.image,
    name: 'image',
    type: 'asset',
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
  description: {
    ...fields.description,
    name: 'description',
    placeholder: 'Descrição...',
    type: 'textarea',
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
    label: 'Publicar',
    onClick: () => {
      if(!fields.title.value) { toast.error('Por favor preencha o titulo') };
      if(!fields.description.value) { toast.error('Por favor preencha a descrição') };
      if(!fields.image.value) { toast.error('Por favor coloque uma imagem') };
      if(!fields.content.value) { toast.error('Por favor preencha o conteúdo') };
      if(fields.title.value && fields.image.value && fields.content.value && fields.description.value) {
        const variables = {
          title: fields.title.value,
          description: fields.description.value,
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
  