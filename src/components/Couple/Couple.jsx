import React from 'react'
import { Container, CoupleArea, Imagem, Moldura, Text, Name, Description } from './CoupleElements'
import FotoCasal from '../../assets/foto-casal.png'

const Couple = () => {
  return (
    <div style={{padding: '120px 0'}}>
      <Container>
        <CoupleArea>
          <Text style={{paddingLeft: 0, textAlign: 'right'}}>
            <Name>Lara Amaral</Name>
            <Description>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Description>
          </Text>

          <Moldura>
            <Imagem>
              <img src={FotoCasal} alt="Foto Casal" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Imagem>
          </Moldura>

          <Text style={{paddingRight: 0, textAlign: 'left'}}>
            <Name>Caio Fernandes</Name>
            <Description>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Description>
          </Text>

        </CoupleArea>
      </Container>
    </div>
  )
}

export default Couple