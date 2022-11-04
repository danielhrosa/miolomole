import styled from 'styled-components'

export const ComingSoon = styled.div`
  margin: 32px 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  font-family: Montserrat;
  font-weight: bold;
  position: relative;

  svg { animation: .8s linear infinite walking; }

  span::after {
    content: '';
    animation: 2s linear dotAnimation infinite;
    position: absolute;
  }

  @keyframes walking {
    0% { 
      transform: rotate(0deg) translateY(0px);
    }
    25% { 
      transform: rotate(7deg) translateY(-10px);
    }
    50% { 
      transform: rotate(0deg) translateY(-10px);
    }
    75% { 
      transform: rotate(-7deg) translateY(0px);
    }
    85% { 
      transform: rotate(0deg) translateY(-1px);
    }
    100% { 
      transform: rotate(0deg) translateY(0px);
    }
  }

  @keyframes dotAnimation {
    0% { content: '' }
    14% { content: '.' }
    28% { content: '..' }
    42% { content: '...' }
    57% { content: '..' }
    71% { content: '.' }
    100% { content: '' }
  }
`;