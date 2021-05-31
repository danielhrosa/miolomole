
import { useState } from 'react';
import * as S from './StoreJumbotron.style'
import Container from '../Container'
import { StoreJumbotronFieldsFunction, StoreJumbotronFieldsState, gridTemplate } from './StoreJumbotron.constants';
import Form from '../../Elements/Form';
import Editable from '../Editable';
import axios from 'axios';
import EditableImage from '../EditableImage';
import { useRouter } from 'next/router';

export default function StoreJumbotron(props){
  const [ fields, setFields ] = useState(StoreJumbotronFieldsState);
  const router = useRouter();
  const storeJumbotronFields = StoreJumbotronFieldsFunction({ fields, router });
  const storeJumbotronObj = { fields: storeJumbotronFields, setFields, gridTemplate}

 return(
    <S.StoreJumbotronContainer>
      <EditableImage {...props} textKey="storeJumbotronImage"><S.StoreJumbotronImage /></EditableImage>
      <Container>
        <S.JumbotronWraper>
          <Editable {...props} textKey="storeJumbotronTitle"><S.StoreJumbotronTitle /></Editable>
          <Editable {...props} textKey="storeJumbotronSubTitle"><S.StoreJumbotronSubTitle /></Editable>
          <Form {...storeJumbotronObj}/>
        </S.JumbotronWraper>
      </Container>
    </S.StoreJumbotronContainer>
  )
}