import styled, { css } from "styled-components";

export const FormWrapper = styled.section`
  ${({ striped }) => striped && css`
    div.field:nth-child(even){
      background-color: ${({ theme: { color: { gray } } }) => gray};
    }
  `}
`;

export const Form = styled.form`
  display: grid;
  ${({ gridTemplate, joinUsWay }) => gridTemplate({ joinUsWay })};
`;