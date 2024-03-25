// import React from 'react'
import { useState } from 'react'
import { Background, Title, Price, Container, Botao, Gif, ModalPrice, ModalContainer, ModalText, ModalText1, ModalText2} from './ProductElements'
import { MdPix } from 'react-icons/md';
import DancingGirl from '../../assets/dancing-girl.gif'
import Modal from '../Modal/Modal'
import PIX from "react-qrcode-pix";
import theme from '../GlobalStyles'


const Product = ({name, price, image}) => {

  const [openModal, setOpenModal] = useState(false)

  const [pixCode, setPixCode] = useState("");
  const [buttonText, setButtonText] = useState('Copiar código do QR Code');

  function handleClipboardClick() {
    navigator.clipboard.writeText(pixCode);
    let origText = 'Copiar código do QR Code';
    setButtonText("Copiado!");
    setTimeout(() => {
      setButtonText(origText);
    }, 2000);
  }



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
        <ModalContainer>
          <ModalPrice>R$ {price}</ModalPrice>

          <ModalText>Use o QR Code do Pix para nos presentear</ModalText>
          <div style={{justifyContent: 'center', display: 'flex'}}>
            <PIX
              pixkey="amaral.ph.m@gmail.com"
              merchant="Pedro Henrique Medeiros Amaral"
              city="BRASILIA"
              cep="71680369"
              // code={name}
              amount={price}
              onLoad={setPixCode}
              padding={30}
              color={theme.color3}
              bgColor={theme.color4}
              bgRounded
            />
          </div>
          <Botao style={{marginTop: "20px"}} onClick={() => handleClipboardClick()}>
            {buttonText}
          </Botao>

          <ModalText1>Se preferir nossas chaves PIX:</ModalText1>
          <ModalText2>
            Lara: 000.000.000.00<br/>
            Caio: 000.000.000.00
          </ModalText2>
        </ModalContainer>
      </Modal>
    </Container>
  )
}

export default Product