import styled from 'styled-components';

export const ContactMap = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  iframe {
    width: 100%;
    height: 300px;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    iframe {
      height: 400px;
    }
  }
`;
