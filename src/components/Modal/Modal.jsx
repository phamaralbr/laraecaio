import React from 'react'
import theme from '../GlobalStyles'

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '70px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  color: 'black',
  // maxWidth: '90vw'
}

const closeBtn = {
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  position: 'absolute',
  width: '40px',
  height: '40px',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  color: theme.color1,
  fontFamily: theme.font1,
  fontSize: '24px',
  backgroundColor: theme.color4,
  borderRadius: '100px',
}

export default function Modal({ isOpen, setModalOpen, children }) {

  function handleChildClick(e) {
    e.stopPropagation()
  }

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE} onClick={setModalOpen}>
        <div style={MODAL_STYLE} onClick={handleChildClick}>
          <div style={closeBtn} onClick={setModalOpen}>
          &#x2715;
          </div>
          <div>{children}</div>
          {/* <button onClick={setModalOpen}>Fechar</button> */}
        </div>
      </div>
    )
  }

  return null
}




  // position: 'fixed',
  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0,
  // backgroundColor: 'rgba(0, 0, 0, .7)',
  // zIndex: 1000