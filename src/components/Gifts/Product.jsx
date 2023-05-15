import React from 'react'
import { Background, Title, Price, Container, Botao, Gif } from './ProductElements'
import { MdPix } from 'react-icons/md';
import DancingGirl from '../../assets/dancing-girl.gif'

const Product = ({name, price, image}) => {
  return (
    <Container>
      {/* <div style={{width: '200px', height: '210px'}}> */}
        <Background>
          {image == 'pix' 
          ? <MdPix style={{width: '100%', height: '100%', color: '#a3888c'}}/>
          : <img src={'src/assets/Products/' + image} alt="Produto" style={{maxWidth: '100%', maxHeight: '100%'}}/>
          }

          {image == 'pix' && <Gif src={DancingGirl} alt="Dancing girl GIF" />}
          </Background>
      {/* </div> */}
      <Title>{name}</Title>
      <Price>
        {image == 'pix'
        ? ''
        : 'R$ '
        }
        {price}
      </Price>
      <Botao>
        Comprar
      </Botao>
    </Container>
  )
}

export default Product