import React from 'react'
import { useState } from 'react'
import { Background, Title, Price, Container, Botao, Gif } from './ProductElements'
import { MdPix } from 'react-icons/md';
import DancingGirl from '../../assets/dancing-girl.gif'
import Modal from '../Modal/Modal'

const Product = ({name, price, image}) => {

  const [openModal, setOpenModal] = useState(false)


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
      <Botao onClick={() => setOpenModal(true)}>
        Comprar
      </Botao>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteúdo do modal
      </Modal>
    </Container>
  )
}

export default Product