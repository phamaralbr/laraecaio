import styled from 'styled-components'
import theme from '../GlobalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 100%;
`;

export const Background = styled.div`
  background: ${theme.color4};
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  // width: 200px;
  height: 210px;
  border-radius: 8px;
  padding: 40px 20px 10px 20px;
  display: flex;
  justify-content: center;

  transition-property: box-shadow;
  transition-duration: 0.3s;

  ${Container}:hover &{
    box-shadow: 0 5px 15px  rgba(163, 136, 140, 0.3);
  }
`;

export const Title = styled.h2`
  font-family: ${theme.font1};
  font-weight: 400;
  font-size: 22px;
  line-height: 1.3em;
  margin-bottom: 5px;
  color: ${theme.color3};
  height: 58px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Price = styled.p`
  // font-family: ${theme.font1};
  color: ${theme.color1};;
  font-size: 24px;
  font-weight: 400;
  margin-top: 0
`;

export const Botao = styled.button`
  width: 100%;
  font-size: 18px;
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

export const Gif = styled.img`
  display: none;
  position: absolute;
  max-height: 100%;
  max-width: 100%;
  bottom: 0;

  ${Container}:hover &{
    display: block;
  }
`;