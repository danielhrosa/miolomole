import styled, { css } from "styled-components";

export const WhereToBuy = styled.div`
	margin: 90px 16px 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
  button { margin: 0 auto; }
	@media (min-width: 1024px) {
		align-items: flex-start;
	}
`;

export const WhereToBuyHeaderTitle = styled.h1`
  font-family: Amatic SC;
  font-size: 40px;
  text-align: center;
  width: 100%;
`;

export const WhereToBuyColum = styled.div`
	width: ${({ isLoggedIn }) => isLoggedIn ? '100%' : '50%' };
	display: flex;
	justify-content: center;
	@media (min-width: 1024px) {
    align-items: center;
  }
`;

export const WhereToBuyColumWrapper = styled.div`
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
  ${({ isLoggedIn }) => !!isLoggedIn && css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div { width: 100%; }
  `};
`;

export const WhereToBuyColumTitle = styled.h1`
	font-weight: 400;
	font-size: 24px;
`;

export const WhereToBuyColumText = styled.p`
  font-family: Montserrat;
  line-height: 26px;
  margin-bottom: 5px;
`;

export const WhereToBuyOptions = styled.div`
  ${({ isLoggedIn }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    @media (min-width: 1024px) { 
      flex-direction: ${isLoggedIn ? 'column' : 'row'};
    } 
  `}
`;