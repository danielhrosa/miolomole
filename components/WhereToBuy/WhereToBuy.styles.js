import styled from "styled-components";

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
	width: 50%;
	display: flex;
	justify-content: center;
  div { text-align: center; }
	@media (min-width: 1024px) {
    align-items: center;
    div { text-align: left; }
  }
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
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1024px) { flex-direction: row; } 
`;