import React from 'react'
import { Label } from './MainLabelElements'
import { Container } from '@mui/material'
import TitleLeaves from '../../assets/title-leaves.png'

const MainLabel = ({label}) => {
  return (
    <Container>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px'}}>
        <img src={TitleLeaves} alt="Fancy Shape" style={{maxHeight: '100%', maxWidth: '200px', margin: '0 auto -35px'}} />
        <Label>
          {label}
        </Label>
      </div>
    </Container>
  )
}

export default MainLabel