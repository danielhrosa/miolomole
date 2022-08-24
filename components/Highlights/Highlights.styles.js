import styled from 'styled-components';

export const Highlights = styled.div`
  margin-top: 10%;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #00A79D;
`

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
`
export const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Jumbotron = styled.div`
  background-image: url(${({ img }) => img });
  height: 400px;
  width: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #898F9B;
  background-position: center;
  position: relative;
  cursor: pointer;

  .container{
    display: flex;
    align-items: flex-start;
  }

  .delete { 
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
 
`
export const Description = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2.4px;
  line-height: 2;
  margin-bottom: 30px;
  color: #FFFFFF;
  filter: drop-shadow(2px 4px 2px black);
`
export const JumboTitle = styled.div`
  font-family: Arvo;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  margin-left: 30px;
  filter: drop-shadow(2px 4px 6px black);
`
