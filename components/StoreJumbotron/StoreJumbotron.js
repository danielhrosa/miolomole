
import { useState } from 'react';
import * as S from './StoreJumbotron.style'
import Container from '../Container'
import { StoreJumbotronFieldsFunction, StoreJumbotronFieldsState, gridTemplate } from './StoreJumbotron.constants';
import Form from '../../Elements/Form';
import Editable from '../Editable';
import axios from 'axios';
import EditableImage from '../EditableImage';

export default function StoreJumbotron(props){
  const [ fields, setFields ] = useState(StoreJumbotronFieldsState);
  const storeJumbotronFields = StoreJumbotronFieldsFunction({ fields, setFields });
  const storeJumbotronObj = { fields: storeJumbotronFields, setFields, gridTemplate}

 // <Editable {...props} textKey="aboutUsImaginationTitle"><S.ImagitationTitle /></Editable>
  

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