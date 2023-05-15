import styled from 'styled-components'
import theme from '../GlobalStyles'

export const Label = styled.div`
  font-size: 45px;
  line-height: 55px;
  font-family: ${theme.font1};
  font-weight: 400;
  color: ${theme.color1};
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  margin: 10px 0 0;

  &:before{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 70%;
    height: 1px;
    content: "";
    background: ${theme.color7};
  }

  &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 120%;
    height: 1px;
    content: "";
    background: ${theme.color7};
    left: -10%;
  }
`;
