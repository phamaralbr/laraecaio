import styled from 'styled-components'
import theme from '../GlobalStyles'

// export const Container = styled.div`
//   // width: 100%;
//   margin-right: 15%;
//   margin-left: 15%;

//   @media screen and (max-width: 1200px) { 
//     margin-right: 10%;
//     margin-left: 10%;
//   }

//   @media screen and (max-width: 768px) { 
//     margin-right: 5%;
//     margin-left: 5%;
//   }
// `;

export const Botao = styled.button`
  width: 20%;
  min-width: 200px;
  font-size: var(--font400);
  font-weight: 700;
  background: #cfb8bb;
  color: white;
  border-radius: 8px;
  text-align: center;
  border: 0;
  padding: 12px 20px;
  margin-top: auto;
  cursor: pointer;

  transition-property: box-shadow;
  transition-duration: 0.3s;

  &:hover{
    background: #a3888c;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${theme.font1};
  font-weight: 400;
  font-size: var(--font500);
  margin-bottom: 20px;
  color: ${theme.color3};
`;