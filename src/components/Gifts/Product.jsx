import React from 'react'
import { Background, Title, Price, Container } from './ProductElements'

const Product = ({name, price, image}) => {
  return (
    <Container>
      <Background>
        <img src={'src/assets/Products/' + image} alt="Produto" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', bottom: '-20px'}}/>
      </Background>
      <Title>{name}</Title>
      <Price>{price}</Price>
    </Container>
  )
}

export default Product