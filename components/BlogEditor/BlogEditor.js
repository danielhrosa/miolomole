import { useContext, useState } from 'react';
import * as S from './BlogEditor.style'
import Field from '../../Elements/Field';
import { blogFieldsFunction, blogFieldsState } from './BlogEditor.constants';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useAppProvider } from '../../store/appProvider';

export default function BlogEditor({ article }){
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const { name } = router.query;
  const [fields, setFields] = useState(blogFieldsState(article));
  const blogFields = blogFieldsFunction({ fields, setFields, name, isLoggedIn });
  !isLoggedIn && delete blogFields.button;
  !isLoggedIn && delete blogFields.description;
  return (
    <S.BlogEditor isLoggedIn={isLoggedIn}>
      { Object.values(blogFields).map((field) => <Field key={field.name} {...field} />) }
      <Toaster position="bottom-right" reverseOrder={false}/>      
    </S.BlogEditor>
  )
}
