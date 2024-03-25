import React from 'react'
import { Botao, SubTitle } from './ConfirmacoesElements'
import { Container } from '@mui/material'
import MainLabel from '../MainLabel/MainLabel'
import theme from '../GlobalStyles'

const Confirmacoes = () => {
  return (
    <div id="confirmacoes" style={{backgroundColor: theme.color4, padding: "5%", marginBottom: '5%'}}>
      <Container>
        <MainLabel label='Confirmações'/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
          <SubTitle>Estamos ansiosos para comemorar com você. Confirme sua presença!</SubTitle>
          <Botao onClick={() => window.open("https://wa.me/5561982283399?text=Ol%C3%A1%2C+quero+confirmar+minha+presen%C3%A7a+no+casamento%21", '_blank')}>
            Confirmar Presença
          </Botao>
        </div>
      </Container>
    </div>
  )
}

export default Confirmacoes