import React from 'react'
import { CoupleArea, Imagem, Moldura, Text, Name, Description } from './CoupleElements'
import FotoCasal from '../../assets/foto-casal.png'
import { Container } from '@mui/material'

const Couple = () => {
  return (
    <div id="casal" style={{padding: '120px 0'}}>
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
      <br style={{marginBottom: '100px'}}/>
    </div>
  )
}

export default Couple