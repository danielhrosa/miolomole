import styled from 'styled-components';
import FormComponent from '../../Elements/Form';

export const Highlight = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme: { color: { brand } } }) => brand};;
`;
export const AddUserButton = styled.div`
  background-color: white;
  width: 100%;
  cursor: pointer;
  span {
    font-size: 36px;
    line-height: 56px;
    font-weight: 500;
  }
  &:hover {
    color: ${({ theme: { color: { blue }}}) => blue };
    transition: .5s cubic-bezier(.22,.68,0,1.71);
  }
`;
export const List = styled.div` 
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Form = styled(FormComponent)`
  width: 100%;
`;