import styled from 'styled-components'

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
  background: #fbf8f8;
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
  background: rgb(255, 255, 255);
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
  color: #002642;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: #848892;
  line-height: 1.8em;
`;