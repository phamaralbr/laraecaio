import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 45px;
  column-gap: 25px;

  @media only screen and (max-width: 456px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
