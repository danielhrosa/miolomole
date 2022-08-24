import styled, {css} from 'styled-components';
import Button from '../../Elements/Button';
import iconQuotes from '../../images/icon_quotes.svg';

export const PostCard = styled.div`
  cursor: pointer;
  position: relative;

`

export const PostCardImage = styled.img`
  height: 240px;
  width: 240px;  
  object-fit: cover;  
  border-radius: 16px;  
`

export const PostCardInfo = styled.div`
 
`

export const PostCardTitle = styled.h1`
  font-family: "Amatic SC";
  font-weight: 700;
  font-size: 32px;
  line-height: 1.4;
  color: #212121;
  overflow: hidden;
  text-overflow: ellipsis;
  `
export const PostCardText = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #000000s;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const FooterItemLabel = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 9px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #9FA3A7;

  svg{
    margin-right: 5px
  }

  @media (min-width: 768px){
    font-size: 11px;
    svg{
      margin-right: 8px
    }
  }
`
export const Line = styled.div`
  width: calc(100% - 40px);
  height: 2px;
  background-color: ${({ theme: { color: { brand } } }) => brand};;
  position: relative;
  margin-top: 30px;
  ::after{
    content: '';
    background-image: url(${iconQuotes});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 30px;
    height: 30px;
    display: block;
    font-size: 28px;
    position: absolute;
    right: -24px;
    top: -27px;
  }
  
`

export const DeleteButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 20px;
`