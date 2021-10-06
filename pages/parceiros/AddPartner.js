import React from 'react';
import styled from 'styled-components';

const PartnerPageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function PartnerPage(props){
  // const { isLoggedIn } = useAppProvider();
  // if(isLoggedIn){ return <PartnerForm {...props} />} else { return <PageJustForAdmin /> }
  return <PartnerPageWrapper><h1>Página de parceiros em manutenção.</h1></PartnerPageWrapper>
}
