import styled from 'styled-components'

export const Banner = styled.section` 
  background: #fff;
  // height: 1260px;
  display: flex;
  position: relative;
  z-index: 0;
`;

export const BannerContainer = styled.div` 
  width: 100%;
  height: 100%;
  // position: absolute;
  // left: 0;
  // top: 0;
  display: flex;
  margin-top: 50px;
`;

export const Heading = styled.div` 
  flex: 1;
  padding-left: 10%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 966px;
`;

export const Title = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 85px;
  color: #a3888c;
  font-weight: 500;
  line-height: 60px;
  margin: 10px 0 35px;
`;

export const SubTitle = styled.h2`
  font-family: Jost,sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #585858;
  text-transform: uppercase;
`;

export const Couple = styled.div` 
  width: 50%;
`;

export const Countdown = styled.div` 
  display: flex;
  flex-direction: row;
`;

export const TimeContainer = styled.div` 
  padding-right: 60px;
`;

export const Time = styled.div` 
  font-family: 'Josefin Sans', sans-serif;
  font-size: 60px;
  line-height: 0.8em;
  padding-top: 15px;
  color: #585858;
  font-weight: 300;
`;

export const TimeText = styled.small` 
  font-family: Jost,sans-serif;
  color: #585858;
  font-size: 25px;
`;

export const Imagem = styled.img` 
  padding: 30px;
  box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
  background: #fff;
  border-radius: 1000px;
  z-index: 1;
  max-width: 640px;
`;

export const LeavesBottom = styled.img` 
  position: absolute;
  left: -100px;
  bottom: -185px;
  z-index: -1;
`;

export const LeavesTop = styled.img` 
  position: absolute;
  right: -200px;
  top: -40px;
  z-index: -1;
`;

