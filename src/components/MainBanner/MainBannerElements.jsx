import styled from 'styled-components'
import theme from '../GlobalStyles'

export const Banner = styled.section` 
  background: ${theme.color5};
  // height: 1260px;
  display: flex;
  position: relative;
  z-index: 0;
`;

export const BannerContainer = styled.div` 
  width: 100%;
  // height: 100%;
  // position: absolute;
  // left: 0;
  // top: 0;
  // display: flex;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Heading = styled.div` 
  // flex: 1;
  padding-left: 10vw;
  // width: 50%;
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  // height: 966px;

  justify-content: center;
  flex-direction: column;

  // display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
`;

export const Title = styled.h2`
  font-family: ${theme.font1};
  font-size: var(--fontXL);
  color: ${theme.color1};
  font-weight: 500;
  line-height: 60px;
  margin: 10px 0 35px;
`;

export const SubTitle = styled.h2`
  font-family: Jost,sans-serif;
  font-weight: 400;
  font-size: var(--font600);
  color: ${theme.color3};
  text-transform: uppercase;
`;


export const CoupleContainer = styled.div` 
  position: relative;
  width: fit-content;
  height: fit-content;

  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Couple = styled.div` 
  // width: 50%;

  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;

  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20%;
  }
`;

export const Countdown = styled.div` 
  display: flex;
  flex-direction: row;
`;

export const TimeContainer = styled.div` 
  padding-right: 10%;
`;

export const Time = styled.div` 
  font-family: ${theme.font1};
  font-size: var(--fontLG);
  line-height: 0.8em;
  padding-top: 15px;
  color: ${theme.color3};
  font-weight: 300;
`;

export const TimeText = styled.small` 
  font-family: Jost,sans-serif;
  color: ${theme.color3};
  font-size: var(--font600);
`;

export const Imagem = styled.img` 
  padding: 3%;
  box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
  background: ${theme.color5};
  border-radius: 1000px;
  z-index: 1;
  max-width: 640px;

  width: 100%;
`;

export const LeavesBottom = styled.img` 
  position: absolute;
  left: -10%;
  bottom: -20%;
  z-index: -1;
  width: 80%;
`;

export const LeavesTop = styled.img` 
position: absolute;
right: -20%;
top: -10%;
z-index: -1;
width: 50%;
`;

