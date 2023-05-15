import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div`
  background: #fbf8f8;
  height: 220px;
  width: 250px;
  border-radius: 8px;
  padding: 50px 20px 0 20px
`;

export const Title = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
  color: #585858;
`;

export const Price = styled.p`
  // font-family: 'Josefin Sans', sans-serif;
  color: #a3888c;
  font-size: 26px;
  font-weight: 400;
  margin-top: 0
`;