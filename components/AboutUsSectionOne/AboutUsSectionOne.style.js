import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const AboutUsSectionOne = styled.div`
  overflow-y: hidden;
  .container{
    padding-top: 100px;
    @media screen{
      @media (min-width: 768px){

      }
    }
  }
`;

export const SectionOneImages = styled.div`
  height: 100%;
  /* background: #C4C4C4; */
  border-radius: 8px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;

  @media screen{
    @media (min-width: 640px){
      width: 100%;
      justify-content: center;
      justify-content: space-around;
      
    }
    @media (min-width: 1024px){
      width: 70%;

    }
  }

`

export const SectionOneText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;
  width: 100%;
  text-align: center;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :first-child{
    margin-right: 30px;
    @media screen{
      @media (min-width: 640px){
        margin-right: unset;
      }
    }
  }

`
export const SectionOneImageOne = styled.img`
  height: 200px;
  width: 200px;
  background: #C4C4C4;
  border-radius: 50%;
  display: block;
  object-fit: cover;

  @media screen{
    @media (min-width: 640px){
      height: 150px;
      width: 150px;
    }
    @media (min-width: 1024px){
      height: 200px;
      width: 200px;
    }
  }
`

export const ImageName = styled.p`
  font-weight: bolder;
`