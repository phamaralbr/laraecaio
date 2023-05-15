import styled from 'styled-components'

export const Label = styled.div`
  font-size: 45px;
  line-height: 55px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  color: #a3888c;
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
    background: #e7e7e7;
  }

  &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 120%;
    height: 1px;
    content: "";
    background: #e7e7e7;
    left: -10%;
  }
`;
