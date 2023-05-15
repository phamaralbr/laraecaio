import styled from 'styled-components'
import theme from '../GlobalStyles'

export const Container = styled.div`
  // width: 100%;
  margin-right: 15%;
  margin-left: 15%;

  @media screen and (max-width: 1200px) { 
    margin-right: 10%;
    margin-left: 10%;
  }

  @media screen and (max-width: 768px) { 
    margin-right: 5%;
    margin-left: 5%;
  }
`;

export const CoupleArea = styled.div`
  background: ${theme.color4};
  height: 345px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

export const Imagem = styled.div`
  width: 420px;
  height: 420px;
  border-radius: 235px;
  overflow: hidden;
`;

export const Moldura = styled.div`
  padding: 20px;
  box-shadow: rgba(28, 31, 86, 0.06) 0px 0px 6.1px 3.9px;
  background: ${theme.color5};
  border-radius: 235px;
`;

export const Text = styled.div`
  width: 29%;
  padding: 40px 60px;
`;

export const Name = styled.h3`
  font-size: 2rem;
  margin: 0 0 .6em;
  font-weight: 300;
  color: ${theme.color2};
  font-family: ${theme.font1};
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${theme.color6};
  line-height: 1.8em;
`;