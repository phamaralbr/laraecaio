import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  cursor: pointer;
`;

export const Background = styled.div`
  background: #fbf8f8;
  border-radius: 8px;
  padding: 40px 20px 10px 20px;
  display: flex;
  justify-content: center;

  transition-property: box-shadow;
  transition-duration: 0.3s;

  ${Container}:hover &{
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.3em;
  margin-bottom: 5px;
  color: #585858;
`;

export const Price = styled.p`
  // font-family: 'Josefin Sans', sans-serif;
  color: #a3888c;
  font-size: 24px;
  font-weight: 400;
  margin-top: 0
`;