import React from 'react'
import { Banner, BannerContainer, Heading, Couple, Countdown, Time, TimeText, Title, SubTitle, TimeContainer, Imagem,
LeavesBottom, LeavesTop} from './MainBannerElements'
import FancyShape from '../../assets/fancy-shape.png';
import FancyShapeUpsideDown from '../../assets/fancy-shape-upside-down.png';
import FotoCasal from '../../assets/foto-casal.png'
import Leaves1 from '../../assets/leaves-1.png'
import Leaves2 from '../../assets/leaves-2.png'
import { useCountdown } from './useCountdown';

const MainBanner = () => {
  const ano = 2024;
  const mes = 5
  const dia = 16
  const hora = 0
  const minuto = 0
  const [days, hours, minutes, seconds] = useCountdown(new Date(ano ,mes -1, dia, hora, minuto));

  return (
    <Banner id="home"> 
      <BannerContainer>
        <Heading>
          <img src={FancyShape} alt="Fancy Shape" style={{paddingBottom: '80px', width: 'fit-content'}} />
          <Title>Lara & Caio</Title>
          <SubTitle>We Are Getting Married Jul 8, 2022</SubTitle>
          <Countdown>
            <TimeContainer>
              <Time>{days}</Time>
              <TimeText>Dias</TimeText>
            </TimeContainer>
            <TimeContainer>
              <Time>{hours}</Time>
              <TimeText>Horas</TimeText>
            </TimeContainer>
            <TimeContainer>
              <Time>{minutes}</Time>
              <TimeText>Min</TimeText>
            </TimeContainer>
            <TimeContainer>
              <Time>{seconds}</Time>
              <TimeText>Seg</TimeText>
            </TimeContainer>
          </Countdown>
          <img src={FancyShapeUpsideDown} alt="Fancy Shape" style={{paddingTop: '80px', width: 'fit-content'}} />
        </Heading>
        <Couple>
          <div style={{position: 'relative', width: 'fit-content'}}>
            <Imagem src={FotoCasal} alt="Foto Casal"/>
            <LeavesBottom src={Leaves1} alt="Folhas"/>
            <LeavesTop src={Leaves2} alt="Folhas"/>
          </div>
        </Couple>
      </BannerContainer>
    </Banner>

  )
}

export default MainBanner